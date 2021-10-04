/// <reference types ="Cypress" />

export class BasePage{
    goTo(){
        cy.visit('http://automationpractice.com/index.php')
    }
}

export const basePage = new BasePage();