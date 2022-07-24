/// <reference types="cypress" />

describe('testing text box elements from ToolsQA', () => {
    beforeEach(() => {
        cy.visit('/text-box')
    })

    let info = {
        name: "James Hetfield",
        email: "jhetfield@metallica.com",
        currentAddress: "250 5th Ave, New York, NY 10118, USA",
        permanentAddress: "73 8th Ave, New York, NY 10118, USA"
    }

    xit('Verify that informations are loaded when form is submitted', () =>{
        
        cy.typeFullname(info.name)
        cy.typeEmail(info.email)
        cy.typeCurrentAddress(info.currentAddress)
        cy.typePermanentAddress(info.permanentAddress)
        cy.submitTextBox()
        cy.get('#name').contains(info.name)
        cy.get('#email').contains(info.email)
        cy.get('.border > #currentAddress').contains(info.currentAddress)
        cy.get('.border > #permanentAddress').contains(info.permanentAddress)
        
    })

   it('Verify that information are not load when form is submitted with an invalid email', () => {

        cy.typeFullname(info.name)
        cy.typeEmail('jhetfield2metalica.com')
        cy.typeCurrentAddress(info.currentAddress)
        cy.typePermanentAddress(info.permanentAddress)
        cy.submitTextBox()
        cy.get('.border').should('not.exist')

    })

})