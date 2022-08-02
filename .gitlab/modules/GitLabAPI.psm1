# Variables definitions
# Handle authorization w/ a personal access token
$session        = [Microsoft.PowerShell.Commands.WebRequestSession]::new();
$session.Headers.Add('PRIVATE-TOKEN', $(Get-Content token.txt));

# User and Project IDs for reference
$intProjId      = 37495472;
# $intUserId      = 11928349;

# API url and endpoints
$strBaseUrl     = 'https://gitlab.com/api/v4';
$strProjUrl     = "$strBaseUrl/projects/$intProjId";

function Invoke-ApiCall([Microsoft.PowerShell.Commands.WebRequestSession]$WebSession = $session, [string]$Uri) {
    Write-Host "GET: $Uri";
    return Invoke-RestMethod $Uri -WebSession $WebSession;
}
