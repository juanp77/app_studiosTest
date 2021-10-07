/// <reference types="cypress" />

import { using } from "bluebird";
import { basePage } from "../../pages/basePage";
import { checkoutPage } from "../../pages/checkoutPage";
import { homePage } from "../../pages/homePage";
import { productPage } from "../../pages/productPage";


//const tests = require('../../fixtures/data-driven/searchProduct.json')



describe('Testing - Footer validation', () => {

    beforeEach(() => {

        basePage.goTo()
        cy.fixture('footerInformation.json').as('footer')

    });

    it.only('Validate title Information', () => {

        cy.get('@footer').then((footer) => {
            homePage.scroolToBottom()
            homePage.getFooterTitle()
            homePage.getFooterAdress(footer.addressing)
        })
    })
})
