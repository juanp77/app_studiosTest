/// <reference types ="Cypress" />
import "cypress-real-events/support"

export class ProductPage {
    getProductTitle(product) {
        cy.get('h1').should('be.visible').should('contain.text', product)
    }
}

export const productPage = new ProductPage();