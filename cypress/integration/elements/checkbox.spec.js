/// <reference types="cypress" />


describe('testing checkbox elements from ToolsQA', () => {
    beforeEach(() => {
        cy.visit('/checkbox')
    })

    it('Verify that all boxes have been selected when checking Home', () => {
        cy.expandAll()
        cy.checkHome()
        cy.assertHaveSelected('home')
        cy.assertHaveSelected('desktop')
        cy.assertHaveSelected('notes')
        cy.assertHaveSelected('commands')
        cy.assertHaveSelected('documents')
        cy.assertHaveSelected('workspace')
        cy.assertHaveSelected('react')
        cy.assertHaveSelected('angular')
        cy.assertHaveSelected('veu')
        cy.assertHaveSelected('office')
        cy.assertHaveSelected('public')
        cy.assertHaveSelected('private')
        cy.assertHaveSelected('classified')
        cy.assertHaveSelected('general')
        cy.assertHaveSelected('downloads')
        cy.assertHaveSelected('wordFile')
        cy.assertHaveSelected('excelFile')

    })

    it('Verify that all boxes inside the Desktop toggle have been selected when checking Desktop', () => {
        cy.expandHome()
        cy.checkSpan('Desktop')
        cy.assertHaveSelected('desktop')
        cy.assertHaveSelected('notes')
        cy.assertHaveSelected('commands')
        
    })

    it('Verify that all boxes inside the Documents toggle have been selected when checking Documents', () => {
        cy.expandHome()
        cy.checkSpan('Documents')
        cy.assertHaveSelected('documents')
        cy.assertHaveSelected('workspace')
        cy.assertHaveSelected('react')
        cy.assertHaveSelected('angular')
        cy.assertHaveSelected('veu')
        cy.assertHaveSelected('office')
        cy.assertHaveSelected('public')
        cy.assertHaveSelected('private')
        cy.assertHaveSelected('classified')
        cy.assertHaveSelected('general')
    })

    it('Verify that all boxes inside the Downloads toggle have been selected when checking Downloads', () => {
        cy.expandHome()
        cy.checkSpan('Downloads')
        cy.assertHaveSelected('downloads')
        cy.assertHaveSelected('wordFile')
        cy.assertHaveSelected('excelFile')
    })
})