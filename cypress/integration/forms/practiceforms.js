/// <reference types="cypress" />

describe('testing practice forms from ToolsQA', () => {
    beforeEach(function() {
        cy.visit('/automation-practice-form')
        cy.fixture('example').then((example) => {
            this.example = example
          })
    })

    it('Verify that radio but selected is loaded when checked', function() {
        const cvFile = 'English CV - Tony Correia'
        cy.clearAndType('#firstName', this.example.name)
        cy.clearAndType('#lastName', this.example.lastname)
        cy.clearAndType('#userEmail', this.example.email)
        cy.clearAndType('#userNumber', this.example.mobileNumber)
        cy.clearAndType('#currentAddress', this.example.currentAdress)
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
            .click()    
        cy.selectFromAutoComplete('t','Chemistry')
        cy.xpath('//input[@type="checkbox"]').check({force: true})   
        cy.uploadPicture(cvFile)
        cy.selectState('Haryana')
        cy.selectCity('Panipat')
        cy.setDate(this.example.birthDate)
        cy.get('#submit').click({force: true})
        cy.get('thead > tr > :nth-child(1)').should('have.text', 'Label')
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Student Name') 
        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', 'Student Email') 
        cy.get('tbody > :nth-child(3) > :nth-child(1)').should('have.text', 'Gender') 
        cy.get('tbody > :nth-child(4) > :nth-child(1)').should('have.text', 'Mobile') 
        cy.get('tbody > :nth-child(5) > :nth-child(1)').should('have.text', 'Date of Birth') 
        cy.get('tbody > :nth-child(6) > :nth-child(1)').should('have.text', 'Subjects') 
        cy.get('tbody > :nth-child(7) > :nth-child(1)').should('have.text', 'Hobbies') 
        cy.get('tbody > :nth-child(8) > :nth-child(1)').should('have.text', 'Picture') 
        cy.get('tbody > :nth-child(9) > :nth-child(1)').should('have.text', 'Address') 
        cy.get('tbody > :nth-child(10) > :nth-child(1)').should('have.text', 'State and City')
        cy.get('thead > tr > :nth-child(2)').should('have.text', 'Values')
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', 'Arnold Shwazenegger')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'hello@cypress.io')
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', 'Male')
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', '5511988888')
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should('have.text', '30 May,1947')
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text', 'Chemistry')
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text', 'Sports, Reading, Music')
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should('have.text', 'English CV - Tony Correia')
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text', '250 5th Ave, New York, NY 10118, USA')
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', 'Haryana Panipat')
        cy.get('#closeLargeModal')
            .click()
        
    })

})
