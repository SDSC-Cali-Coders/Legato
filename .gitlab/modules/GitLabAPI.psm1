# Manually loading in WebRequests to address lazy loading
Add-Type -AssemblyName Microsoft.PowerShell.Commands.Utility

# Variables definitions

# Private token injected in pipeline, manually set for local terminal testing
if (-not $env:PRIVATE_TOKEN) {
    $tokenFilePath = "$(git rev-parse --show-toplevel)/.gitlab/modules/token.txt";
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

function Invoke-MergeAction([Microsoft.PowerShell.Commands.WebRequestSession]$WebSession = $session, [int]$iid) {
    # Endpoint: merge_requests/:iid
    # access > state, merge_status, target_branch

    # Endpoint: merge_requests/:iid/approvals
    # access > state, merge_status, approved_by

    # [Tentative] Reqs to be merged:
    # > state:          opened
    # > merge_status:   can_be_merged
    # > target_branch:  -not main
    # > approved_by:    length==3
}

Export-ModuleMember -Variable session, strProjUrl;
Export-ModuleMember -Function Invoke-ApiCall, Get-MergeRequests, Invoke-MergeAction;