import registerPage from '../pageObjects/registerPage';

describe('As an user, I would like to go to register Amazon page', () => {
    it('So that I can complete register form', () => {
        registerPage.goToRegisterPage();
        cy.generateTestData();
        cy.readFile('cypress/fixtures/data.json').then(data => {
            registerPage.fillInRegisterForm(data);
            registerPage.clickContinueBtt();
            registerPage.assertCompleteRegisterForm();
        })
    });

})