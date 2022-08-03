Import-Module ./.gitlab/modules/GitLabAPI.psm1; 
Get-MergeRequests -iid 54;
Invoke-MergeAction -iid 54;