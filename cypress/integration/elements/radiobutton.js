/// <reference types="cypress" />

describe('testing radio button elements from ToolsQA', () => {
    beforeEach(() => {
        cy.visit('/radio-button')
    })

    it('Verify that information are not load when form is submitted with an invalid email', () => {

        cy.get('#yesRadio').check({force : true})
        cy.get('.text-success').should('contain.text', 'Yes')
        cy.get('#impressiveRadio').check({force : true})
        cy.get('.text-success').should('contain.text', 'Impressive')

    })

})
