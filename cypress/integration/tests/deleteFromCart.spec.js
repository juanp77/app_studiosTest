/// <reference types="cypress" />

import { using } from "bluebird";
import { basePage } from "../../pages/basePage";
import { checkoutPage } from "../../pages/checkoutPage";
import { homePage } from "../../pages/homePage";


const tests = require('../../fixtures/data-driven/deleteFromCart.json')



describe('Testing - Add to cart functionality', () => {

    beforeEach(() => {

        basePage.goTo()
    });

    tests.forEach(test => {

        it(test.testName, () => {


            for (let i = 0; i < test.product.length; i++) {
                cy.log(`Home Page - Adding ${test.product[i]} product to cart`)
                homePage.addToCart(test.product[i])
                cy.wait(5000) //Due a enviroment issue

                cy.log(`Home Page - Validate Popup successful title`)
                homePage.getSuccessfull()

                cy.log(`Home Page - Continue on home page`)
                homePage.clickOnContinueShopping()
            }

            cy.log(`Home Page - Validate that products are displayed on checkout`)
            basePage.isProductInCart(test.prodTitle)

            cy.log(`Home Page - Continue to checkout`)
            basePage.clickOnCheckout()

            /**Continuew to checkot */
            cy.log(`Checkout Page - Validate availity of the products`)
            checkoutPage.getPageBreadcrumb()

            for (let i = 0; i < test.product.length; i++) {
                cy.log(`Checkout Page - ${test.product[i]} is in stock`)
                checkoutPage.getProductStock(test.product[i])

                cy.log(`Checkout Page - Delete ${test.product[i]} from cart`)
                checkoutPage.clickOnDeleteProduct(test.product[i])

            }
            cy.log(`Checkout Page - Validate Empty Cart Alert `)
            checkoutPage.getEmptyAlert()


        });
    });

})
