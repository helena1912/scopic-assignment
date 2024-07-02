
import { cart } from '../locators/cartPage.locators'


class cartPage {

    goToCartPage() {
       cy.get(cart.cartMenuItem).click();
    };


    assertItemAddedToCart(productName){
        cy.get(cart.productName).should('contain.text', productName)
    }

}

export default new cartPage()