/// <reference types ="Cypress" />


export class HomePage {

       
    addToCart(product){
            cy.get('#homefeatured').find('li').then(($prod) => {
                cy.wrap($prod).contains(product)
                    .invoke('wrap').parentsUntil('.product-container').contains('Add to cart').click()
            })

        }

    getSuccessfull(){
        //cy.get('.layer_cart_product').should('be.visible')
        cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')
    }

    validateProductPrice(price){
        //let strPrice = price.toString()
        cy.log('console price: '+ price)
        cy.get('#layer_cart_product_price').should('be.be.visible').should('have.text', price)
    }

   
}

    export const homePage = new HomePage();
