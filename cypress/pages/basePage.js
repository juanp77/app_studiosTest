/// <reference types ="Cypress" />
import "cypress-real-events/support"

export class BasePage {
    goTo() {
        cy.visit('http://automationpractice.com/index.php')
    }
    /**Search product  - top of the page */
    setProductSearch(product) {
        cy.get('#search_query_top').focus().should('have.attr', 'placeholder', 'Search')
            .type(product)
    }

    isProductVisible(option) {
        /* let value = cy.get('.ac_even').then(($el) => {
            Cypress.dom.isVisible($el) // true
          }) */

        try {
            if (option != 'not exist') {
                return cy.get('.ac_even').should('be.visible').should('contain.text', option)
            } else {
                return cy.get('.ac_even').should('not.exist')
            }
        } catch {
            return console.error(err);
        }

    }

    isProductInvalid() {
        cy.get('.ac_even').should('not.be.visible')
    }

    searchByProductOption() {
        cy.get('.ac_even').click()
    }

    searchByButton() {
        cy.get("[name='submit_search']").click()
    }

    getEmptySearchAlert(product) {
        cy.get('.alert-warning', { timeout: 10000 }).should('be.visible').contains(`No results were found for your search "${product}"`)
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