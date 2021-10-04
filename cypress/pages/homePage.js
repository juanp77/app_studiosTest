/// <reference types ="Cypress" />


export class HomePage {

    addToCart(product){
        cy.get('#homefeatured').find('li').then(($prod)=>{
            cy.wrap($prod).contains(product)
            .invoke('wrap').parents().contains('Add to cart').click()
        })
        
    }
   
}

export const homePage = new HomePage();
