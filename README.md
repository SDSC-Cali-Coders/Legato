# Legato

## Description
Legato is a web application aimed to connect users through their music tastes.

## Credits
Project Manager: Kelly Luu<br/>
Product Owner: Jacob Bolano<br/>
Developers: Akar Singh, Calista Lee, Lingyu Chen, Marcus Casillas, Terin Ambat, Jacob Bolano 

## Workflow for our team
There are two workflows. One for starting a new feature/branch and then one for working off one someone else already created.

If you are starting a new feature (without an existing branch), create a new branch with a specific name (git branch [BRANCH NAME]) and do the following:<br/>
Work on and add/commit to that local branch<br/>
If you are working with someone on the same branch and want to update the remote branch, you need to first pull to make sure your code is up to date. Then push to that remote repository <br/>
> git push -u origin [BRANCH NAME]

If you want to work on an existing feature/branch and want to start work on that branch do the following:<br/>
Fetch the contents of the branch (git fetch --all)<br/>
Checkout the remote branch (git checkout [REMOTE BRANCH NAME])

FINALLY: If you are done with your feature (including testing if applicable), then you can submit a merge request from your feature branch to main. First push 
> git push -u origin [BRANCH NAME]
And then submit a merge request on Gitlab