# Set Vars
$repoRoot   = (git rev-parse --show-toplevel);
$tokenPath  = "$repoRoot\.gitlab\scripts\token2.txt";
$logPath    = "$repoRoot\.gitlab\logs";

$session = [Microsoft.PowerShell.Commands.WebRequestSession]::new();
$session.Headers.Add("X-Gitlab-Token", (Get-Content $tokenPath));

Get-ChildItem $logPath | Where-Object Name -Match "log-event" | ForEach-Object {
    New-Variable -Force -Name $_.BaseName -Value (Get-Content ("$logPath\{0}" -f $_.Name) | Out-String);
}

# Write a helper for sending a webhook event (or other endpoint if provided)
function Invoke-WebhookEvent {
    Param (
        [Parameter(Position=0)]
        [string]
        $body,

        [Microsoft.PowerShell.Commands.WebRequestSession]
        $WebSession=$session,

        [switch]
        $end,

        [switch]
        $parrot
    )

    Begin {
        $Endpoint = '/webhook';

        if ($end) {
            $Endpoint = '/end';
        }

        if ($parrot) {
            $Endpoint = '/parrot';
        }
    }

    Process {
        Invoke-RestMethod -WebSession $WebSession -Method Post -Body $body "http://localhost:5000/$Endpoint";
    }
}

Set-Alias iwe Invoke-WebhookEvent;
Set-Alias iwh Invoke-WebhookEvent;

Export-ModuleMember -Variable session, *web*;
Export-ModuleMember -Function Invoke-WebhookEvent;
Export-ModuleMember -Alias iwe, iwh;