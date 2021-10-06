/// <reference types ="Cypress" />
import "cypress-real-events/support"

export class BasePage {
    goTo() {
        cy.visit('http://automationpractice.com/index.php')
    }

    /**Top Menu Cart validation */
    isProductInCart(prodTitle) {
        //Simmulating mouseover
        cy.get('[title="View my shopping cart"]').realHover() //trigger('mouseover')
        cy.get('.cart_block').should('be.visible')
        cy.get('.cart_block_product_name').should('contain.text', prodTitle)

        cy.get('.products')
    }

    getTotal(totalPurchase) {
        cy.get('.cart_block_total').should('have.text', totalPurchase)
    }

    clickOnCheckout() {
        cy.get('#button_order_cart').click()
    }
}

export const basePage = new BasePage();