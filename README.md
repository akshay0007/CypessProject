# CypessProject
==============================================
addition details
in home screen test click events and validate they are redirecting correctly or not(using hooks ,object models)
in contact us screen we are submiting message to client validate happy senerio(using hook , object models,fixture)
in login screen we validate correct on incorrect login attempt(using hooks, models)


==============================================
basic setup of project--
1)-
npm init
npm install cypress --save-dev
./node_modules/.bin/cypress open
./node_modules/.bin/cypress run 

2)-if running specific file
./node_modules/.bin/cypress run --spec 'location'

==============================================

for running dashboard view and records video-
./node_modules/.bin/cypress run --record --key bea6dfaf-28a2-4f5b-b33f-2a0d33b4d60a

dashboard link--https://dashboard.cypress.io/projects/rzje2a/runs/1/specs


========================================
jenkins setup

put -->npm run runtests (custom command)