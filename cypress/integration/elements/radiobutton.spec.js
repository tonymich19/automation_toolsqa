/// <reference types="cypress" />

describe('testing radio button elements from ToolsQA', () => {
    beforeEach(() => {
        cy.visit('/radio-button')
    })

    it('Verify that radio but selected is loaded when checked', () => {

        cy.get('#yesRadio').check({force : true})
        cy.get('.text-success').should('contain.text', 'Yes')
        cy.get('#impressiveRadio').check({force : true})
        cy.get('.text-success').should('contain.text', 'Impressive')

    })

})
