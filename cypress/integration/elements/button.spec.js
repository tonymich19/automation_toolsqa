/// <reference types="cypress" />

describe('testing buttons elements from ToolsQA', () => {
    beforeEach(() => {
        cy.visit('/buttons')
    })

    it('Verify that double click button was clicked', () => {
        cy.get('#doubleClickBtn')
            .dblclick()

        cy.get('#doubleClickMessage')
            .should('be.visible')
    })

    it('Verify that right click button was clicked', () => {
        cy.get('#rightClickBtn')
            .rightclick()

        cy.get('#rightClickMessage')
            .should('be.visible')
    })

    it('Verify that simple click button was clicked', () => {
        cy.dynamicClick()

        cy.get('#dynamicClickMessage')
            .should('be.visible')
    })

})