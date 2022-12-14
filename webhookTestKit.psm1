# Set Vars
$repoRoot   = (git rev-parse --show-toplevel);
$tokenPath  = "$repoRoot\.gitlab\scripts\token2.txt";
$logPath    = "$repoRoot\.gitlab\logs";

$session = [Microsoft.PowerShell.Commands.WebRequestSession]::new();
$session.Headers.Add("X-Gitlab-Token", (Get-Content $tokenPath));

Get-ChildItem $logPath | Where-Object Name -Match "log-event" | ForEach-Object {
    New-Variable -Force -Name $_.BaseName -Value (Get-Content ("$logPath\{0}" -f $_.Name) | ConvertFrom-Json);
}

# Write a helper for sending a webhook event (or other endpoint if provided)
function Invoke-WebhookEvent {
    Param (
        [Parameter(Position=0)]
        $body,

        [Microsoft.PowerShell.Commands.WebRequestSession]
        $WebSession=$session,

        [int]
        $port=5000,

        [switch]
        $end,

        [switch]
        $parrot,

        [switch]
        $unauthorized,

        [switch]
        $sdsc
    )

    Begin {
        $Destination = 'localhost'
        $Endpoint = '/webhook';

        if ($end) {
            $Endpoint = '/end';
        }

        if ($parrot) {
            $Endpoint = '/parrot';
        }

        if ($sdsc) {
            $Destination = (Resolve-DnsName sdsc).IPAddress
        }

        $Uri = 'http://{0}:{1}{2}' -f $Destination, $port, $Endpoint;
    }

    Process {
        if ($body -isnot [string]) {
            try {
                $body = $body | ConvertTo-Json;
            }
            catch {
                $body = $body | Out-String
                Write-Out "Failed to convert input body into JSON, defaulting to Out-String:`n$body"
            }
        }

        if ($unauthorized) {
            Invoke-RestMethod -Method Post -Body $body $Uri;
        } else {
            Invoke-RestMethod -WebSession $WebSession -Method Post -Body $body $Uri;
        }
    }
}

Set-Alias iwe Invoke-WebhookEvent;
Set-Alias iwh Invoke-WebhookEvent;

Export-ModuleMember -Variable session, *web*;
Export-ModuleMember -Function Invoke-WebhookEvent;
Export-ModuleMember -Alias iwe, iwh;