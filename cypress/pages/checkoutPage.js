/// <reference types ="Cypress" />


export class CheckoutPage {

    getPageBreadcrumb() {
        cy.get('.breadcrumb', {timeout: 10000}).should('contain.text', 'Your shopping cart')
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

    clickOnDeleteProduct(product){
        cy.get('#cart_summary').find('tbody').then(($prod) => {
            cy.wrap($prod).contains(product)
                .invoke('wrap').parents('.cart_item').children('.cart_delete').children().click()
        })
    }

    getEmptyAlert(){
        cy.get('.alert-warning', {timeout: 10000}).should('be.visible').should('have.text', 'Your shopping cart is empty.')
    }

}

export const checkoutPage = new CheckoutPage();