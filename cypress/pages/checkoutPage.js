/// <reference types ="Cypress" />


export class CheckoutPage {

    getPageBreadcrumb() {
        cy.get('.breadcrumb ').should('contain.text', 'Your shopping cart')
    }

    getProductStock(product) {
        cy.get('#cart_summary').find('tbody').then(($prod) => {
            cy.wrap($prod).contains(product)
                .invoke('wrap').parentsUntil('.cart_avail').contains('In stock')
        })
    }

    clickOnProcedtoCheckout() {
        cy.get('.standard-checkout').click()
        cy.url().should('include', 'display_guest_checkout')
    }

}

export const checkoutPage = new CheckoutPage();