/// <reference types="cypress" />

import { basePage } from "../../pages/basePage";
import { homePage } from "../../pages/homePage";



describe('Testing add to cart functionality', () => {   
    
    it('Add to cart a product', ()=>{
        basePage.goTo()
        homePage.addToCart('Faded Short Sleeve T-shirts')
    })
})
