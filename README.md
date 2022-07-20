# Legato

## Description
Legato is a web application aimed to connect users through their music tastes.

## Credits
Project Manager: Kelly Luu<br/>
Product Owner: Jacob Bolano<br/>
Developers: Akar Singh, Calista Lee, Lingyu Chen, Marcus Casillas, Terin Ambat, Jacob Bolano 

## Workflow for our team
### Modified Gitflow:
Our branch workflow will be based off Gitflow, but better suited for our purposes of web-development. The workflow will include only four branches, each of which are listed and described in more detail below:

#### <u> Main </u>
This will be the branch with the current stable version of our web application.
Big pushes from develop to this branch will be made at the end of every sprint
before sprint reviews, as it will be the code used for tech demos during
presentation. For this reason, all code pushed to main is stable and (mostly)
bug free.

#### <u> Develop </u>
The develop branch is intended to be an integration branch for completed
features. Once a feature is completed, its associated branch will be merged with
this one. Two features may not work together when they both merge to the develop
branch. In these cases, if the bug only requires one commit and developer, the 
change can be made directly to the develop branch. However, if the bug
requires more than one commit and developer to fix, a seperate branch shall be
made with these naming conventions in mind: 
> `bugfix-name-of-error` </br>

or </br>

> `<issue-number>-issue-description` </br>

(if the bugfix is directly linked with an issue).

#### <u> Feature Branches </u>
Each feature should exist in its own branch, where it could undergo collaborative
changes and commits. Features are often taken from prexisting If you are starting a new feature (without an existing branch), create a new branch with a specific name (git branch [BRANCH NAME]). If the feature is associated directly with an issue, BRANCH NAME will follow the naming convention `<issue-number>-issue-description` and do the following:<br/>
Work on and add/commit to that local branch<br/>
If you are working with someone on the same branch and want to update the remote branch, you need to first pull to make sure your code is up to date. Then push to that remote repository <br/>
> git push -u origin [BRANCH NAME]

If you want to work on an existing feature/branch and want to start work on that branch do the following:<br/>
Fetch the contents of the branch (git fetch --all)<br/>
Checkout the remote branch (git checkout [REMOTE BRANCH NAME])

FINALLY: If you are done with your feature (including testing if applicable), then you can submit a merge request from your feature branch to main. First push 
> git push -u origin [BRANCH NAME]
And then submit a merge request on Gitlab

## File Hierarchy 
`\`
- root level of project
- hosts repository centric files (e.g. gitignore, README)

`frontend`
- houses frontend related files
- primarily consists of HTML/CSS 
- root level of React portion of app 

`backend`
- houses backend related files
- primarily consists of JS
- root level of Express/Node portion of app

`specs`
- houses design choice related files
- `Data Models` : details the structure of data that will be used within our app (referenced by backend)
- `Sketches` : defines layout envisioned for app (referenced by frontend)