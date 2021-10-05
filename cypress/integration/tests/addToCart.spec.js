/// <reference types="cypress" />

import { using } from "bluebird";
import { basePage } from "../../pages/basePage";
import { homePage } from "../../pages/homePage";


const tests = require('../../fixtures/data-driven/addToCart.json')



describe('Testing add to cart functionality', () => {
   
    beforeEach(() => {
       
        basePage.goTo()
    });

    tests.forEach(test => {

        it(test.testName, () => {
            homePage.addToCart(test.product)
            homePage.getSuccessfull()
            homePage.validateProductPrice(test.price)
            
            
        });
    });

})
