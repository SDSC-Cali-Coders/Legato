# Manually loading in WebRequests to address lazy loading
Add-Type -AssemblyName Microsoft.PowerShell.Commands.Utility

# Variables definitions

# Private token injected in pipeline, manually set for local terminal testing
if (-not $env:PRIVATE_TOKEN) {
    $tokenFilePath = "$(git rev-parse --show-toplevel)/.gitlab/scripts/token.txt";
    $env:PRIVATE_TOKEN = Get-Content $tokenFilePath;
}

# Handle authorization w/ a personal access token
$session        = [Microsoft.PowerShell.Commands.WebRequestSession]::new();
$session.Headers.Add('PRIVATE-TOKEN', $env:PRIVATE_TOKEN);

# User and Project IDs for reference
$intProjId      = 37495472;
# $intUserId      = 11928349;

# API url and endpoints
$strBaseUrl     = 'https://gitlab.com/api/v4';
$strProjUrl     = "$strBaseUrl/projects/$intProjId";

function Invoke-ApiCall {
    Param (
        [Microsoft.PowerShell.Commands.WebRequestSession]
        $WebSession = $session, 
        
        [Parameter(Mandatory)]
        [string]
        $Uri,

        [ValidateSet("Get", "Post", "Put", "Head")]
        [string]
        $Method = "Get",

        [Object]
        $Body
    )
    
    Begin {
        Write-Host "$Method`: $Uri";
    }

    Process {
        return Invoke-RestMethod $Uri -WebSession $WebSession -Method $Method -Body $Body;
    }
}

function Get-MergeRequests {
    Param (
        [Microsoft.PowerShell.Commands.WebRequestSession]
        $WebSession = $session,

        [string]
        $Uri = $strProjUrl,

        [ValidateSet("opened", "closed", "locked", "merged")]
        [string]
        $state,

        [ValidateSet("Legato: Sprint 2", "Legato: Sprint 3")]
        [string]
        $milestone,

        [switch]
        $simpleView,

        [string]
        $source_branch,

        [string]
        $target_branch,

        [int]
        $iid
    )

    Begin {
        $strFilterQuery = "?";
        if ($iid) {
            $strFilterQuery = "/$iid`?";
        }
        if ($state) {
            $strFilterQuery += "state=$state&";
        }
        if ($milestone) {
            $strFilterQuery += "milestone=$milestone&";
        }
        if ($simpleView) {
            $strFilterQuery += "view=simple&";
        }
        if ($source_branch) {
            $strFilterQuery += "source_branch=$source_branch&";
        }
        if ($target_branch) {
            $strFilterQuery += "target_branch=$target_branch&";
        }
    }

    Process {
        $strMergeEndpoint = "$Uri/merge_requests$strFilterQuery";
        Invoke-ApiCall $WebSession $strMergeEndpoint;
    }
}

function Invoke-MergeAction {
    Param (
        [Microsoft.PowerShell.Commands.WebRequestSession]
        $WebSession = $session,

        [Parameter(Mandatory)]
        [int]
        $iid
    )

    Begin {
        # Endpoint: merge_requests/:iid
        # access > state, merge_status, source_branch, target_branch
        $strMrBaseUrl   = "$strProjUrl/merge_requests/$iid";
        $objMrDetails   = Invoke-ApiCall -WebSession $WebSession -Uri $strMrBaseUrl;

        # Endpoint: merge_requests/:iid/approvals
        # access > state, merge_status, approved_by
        $strMrApprUrl   = "$strMrBaseUrl/approvals";
        $objMrApprovs   = Invoke-ApiCall -WebSession $WebSession -Uri $strMrApprUrl;

        # [Tentative] Reqs to be merged:
        # > state:          opened
        # > merge_status:   can_be_merged
        # > target_branch:  -not main
        # > approved_by:    length==3
        $mergeability   = @(
            $objMrDetails.state -eq 'opened';
            $objMrDetails.merge_status -eq 'can_be_merged';
            $objMrDetails.target_branch -ne 'main';
            $objMrApprovs.approved_by.Length -ge 3
        );
    }

    Process {
        # Endpoint: merge_requests/:iid/merge
        # set > should_remove_source_branch (condition: source_branch is issue/hot-fix branch [regex])
        # set > merge_when_pipeline_succeeds
        $strMergeUrl    = "$strMrBaseUrl/merge";
        $objPostBody    = @{
            should_remove_source_branch =   $objMrDetails.source_branch -match '^(\d+)|(hot-fix)';
            merge_when_pipeline_succeeds =  $true;
        }

        # Log some data for help in debugging in the future
        Write-Host ("Approval status data:`n{0}" -f ($objMrApprovs | ConvertTo-Json));
        Write-Host "`nChecking mergeability (opened | can_be_merged | non-main | approval >= 3):`n$mergeability";
        Write-Host "Checking post body:`n$($objPostBody | ConvertTo-Json)";

        if ($mergeability -notcontains $false) {
            $WebSession.Headers.Add('content-type', 'application/x-www-form-urlencoded');
            try {
                Invoke-ApiCall -Method Put -WebSession $WebSession -Body $objPostBody -Uri $strMergeUrl;
                Write-Host ("SUCCESSFUL POST to {0}" -f $strMergeUrl)
            } catch {
                Write-Host ("FAILURE to POST to {0} w/ err:`n{1}" -f $strMergeUrl, $_)
            }
        }
    }
}

Export-ModuleMember -Variable session, strProjUrl;
Export-ModuleMember -Function Invoke-ApiCall, Get-MergeRequests, Invoke-MergeAction;