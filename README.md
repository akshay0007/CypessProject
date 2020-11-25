# CypessProject
==============================================
test cases details-----
login screen=> we are validating correct on incorrect login attempt(using hooks, models)
forget password=> validating when we are passing user, whether it is redirecting correct page or not(using ,cusotom commands).
home screen => valiating events by clicking on different links (using hooks ,object models)
contact us  => validation on submitting review on page(using hook , object models,fixture)
alerts=> validating alert message when we click on submit button
tabletests=> basic validation on tables


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
