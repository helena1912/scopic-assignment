
import { productList } from '../locators/productListPage.locators'


class productListPage {

    storeFirstProductName() {
        cy.get(productList.productName).first().invoke('text').then(text => {
            cy.readFile('cypress/fixtures/data.json').then(data => {

                data[`firstProductName`] = text
                // Write all fields in json.data
                cy.writeFile('cypress/fixtures/data.json', data);

            })
        })
    };

    clickAddToCart() {
        cy.get(productList.addToCartFirstItemBtt).click();
        cy.get(productList.cartSummarySideBar).should('be.visible');
    };

    addFirstItemToCart(){
        this.storeFirstProductName();
        this.clickAddToCart();
    }
}

export default new productListPage()