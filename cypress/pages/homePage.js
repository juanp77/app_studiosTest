/// <reference types ="Cypress" />

export class HomePage {


    /**Home Page */
    addToCart(product) {
        cy.get('#homefeatured').find('li').then(($prod) => {
            cy.wrap($prod).contains(product)
                .invoke('wrap').parentsUntil('.product-container').contains('Add to cart').click()
        })

    }

    /**Popup add to cart */
    getSuccessfull() {
        cy.get('.layer_cart_product', {timeout: 10000}).should('be.visible')
        cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')
    }

    validateProductInCart(product) {

        cy.get('.layer_cart_product_info').contains(product)
    }
    validateProductPrice(price) {
        cy.get('#layer_cart_product_price').should('be.be.visible').should('have.text', price)
    }

    clickOnContinueShopping() {
        cy.get('.button-container .continue').click()
    }


}

export const homePage = new HomePage();
