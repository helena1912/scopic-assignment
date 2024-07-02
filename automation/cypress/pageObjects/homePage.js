

import { home } from '../locators/homePage.locators'


class homePage {

    goToHomePage() {
        cy.visit(Cypress.config('amazonUrl'));

        cy.get(home.searchBar).should('be.visible');
    };

    isUserLogin(expectVal) {
        cy.get(home.accountListNav).trigger('mouseover');
        switch (expectVal) {
            case true:
                cy.get(home.signInMenu).should('not.exist');
                break;
            case false:
                cy.get(home.signInMenu).should('exist');
                break;
        }

    };
    
    assertUserHasNotLogin(){
        this.isUserLogin(false);
        cy.get('#nav-al-container').click();

    };

    chooseCategory(categoryName) {
        cy.get(`a[aria-label='${categoryName}']`).scrollIntoView().click({force: true});
    };

}

export default new homePage()