/// <reference types="cypress" />

import { using } from "bluebird";
import { basePage } from "../../pages/basePage";
import { checkoutPage } from "../../pages/checkoutPage";
import { homePage } from "../../pages/homePage";
import { productPage } from "../../pages/productPage";


//const tests = require('../../fixtures/data-driven/searchProduct.json')



describe('Testing - Search product functionality', () => {

    beforeEach(() => {

        basePage.goTo()
        cy.fixture('searchItem.json').as('product')
        cy.fixture('searchInvalidItem.json').as('invProduct')
    });

    it('Search for a valid product', () => {

        cy.get('@product').then((product) => {
            basePage.setProductSearch(product.validProduct)
            basePage.isProductVisible(product.displayedOption)
            basePage.searchByProductOption()
            productPage.getProductTitle(product.validProduct)
        })
    })

    it('Search for unexisting product', () => {

        cy.get('@invProduct').then((invProduct) => {
            basePage.setProductSearch(invProduct.invalidProduct)
            basePage.isProductVisible('not exist')
            basePage.searchByButton()
            basePage.getEmptySearchAlert(invProduct.invalidProduct)

        })
    })

})
