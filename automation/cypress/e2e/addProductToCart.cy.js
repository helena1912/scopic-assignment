import cartPage from '../pageObjects/cartPage';
import homePage from '../pageObjects/homePage';
import productListPage from '../pageObjects/productListPage'

describe('As an user, I would like to view Headsets product', () => {
    it('So that I can add product to cart from PLP without login yet', () => {
        homePage.goToHomePage();
        homePage.assertUserHasNotLogin();
        homePage.chooseCategory('Headsets');
        productListPage.addFirstItemToCart();
        cartPage.goToCartPage();
        cy.readFile('cypress/fixtures/data.json').then(data => {
            cartPage.assertItemAddedToCart(data.firstProductName);
        })
    });

})