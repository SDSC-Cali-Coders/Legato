Import-Module ./.gitlab/scripts/GitLabAPI.psm1;
Get-MergeRequests -iid $env:MERGE_IID;
Invoke-MergeAction -iid $env:MERGE_IID;
# Invoke-ApiCall -Uri "$strProjUrl/jobs/$env:JOB_ID";