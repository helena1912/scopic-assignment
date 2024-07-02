# automation framework

## Need installation

Need to install Nodejs: https://nodejs.org/en/ 
Then run:
```
npm install cypress
```
To install required packages to the current project.

## Run the test

Make sure you are in folder assessment/automation/cypress

```
npx cypress run --config-file cypress.config.js --reporter mochawesome
```
## or using shortcut script to run test
```
npm run cy:run
```

## After test finished, a report and video are generated. You can check in smg-assessment/automation/cypress/reports and smg-assessment/automation/cypress/videos




