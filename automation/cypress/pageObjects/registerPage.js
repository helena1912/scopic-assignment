
import {register} from '../locators/registerPage.locators'
import {home} from '../locators/homePage.locators'
import homePage from './homePage';


class registerPage {

    goToRegisterPage(){
        homePage.goToHomePage();
        this.clickAccListNav();
        this.assertSignInPage();
        this.clickcreateAccBtt();
        cy.get(register.customerNameField).should('be.visible');
    };

    fillInRegisterForm(data){
        cy.get(register.customerNameField).type(data.customerName);
        cy.get(register.emailField).type(data.email);
        cy.get(register.enterPasswordField).type(data.password);
        cy.get(register.reEnterPasswordField).type(data.password);
    };

    clickAccListNav(){
        cy.get(home.accountListNav).click();
    };

    clickcreateAccBtt(){
        cy.get(register.createAccBtt).click();
    };

    clickContinueBtt(){
        cy.get(register.continueBtt).click();
    };
    
    assertCompleteRegisterForm(){
        cy.url().should('include', 'https://www.amazon.com/ap/cvf/request?arb=')
    }

    assertSignInPage(){
        cy.get(register.createAccBtt).should('be.visible');
    }

}

export default new registerPage()