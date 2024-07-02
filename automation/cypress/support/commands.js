// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This is a command to access any iframe


Cypress.Commands.add('generateTestData', () => {

    // Store generate data to data.json
    cy.readFile('cypress/fixtures/data.json').then(data => {
        const ranVal = "Auto" + Math.floor(Math.random() * 10000);
        
        data[`email`] = ranVal + "@mailinator.com";
        data[`customerName`] = ranVal + "customerName";
        data[`password`] = ranVal + "pw";
        // Write all fields in json.data
        cy.writeFile('cypress/fixtures/data.json', data);

    })

});