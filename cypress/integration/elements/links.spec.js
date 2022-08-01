/// <reference types="cypress" />

describe('testing link elements from ToolsQA', () => {
    beforeEach( function ()  {
        cy.visit('/links')
        cy.fixture('link_responses').then((linkResponses) => {
            this.linkResponses = linkResponses
          })
    })

    it('Verify that home link goes to ToolsQA Homepage', () => {
        cy.get('#simpleLink')
            .invoke('removeAttr', 'target')
            .click()

        cy.url()
            .should('be.equal', 'https://demoqa.com/')
    })

    it('Verify that HomeGs1Py link open a new tab to ToolsQA Homepage', () => {
        cy.get('#dynamicLink')
            .invoke('removeAttr', 'target')
            .click()

        cy.url()
            .should('be.equal', 'https://demoqa.com/')
    })
    
    it('Verify that Created link sends an API call and respond with status code 201', function () {
        cy.get('#created')
            .click()
        
        cy.assertResponse(this.linkResponses.created_response)
    })
    
    it('Verify that No Content link sends an API call and respond with status code 204', function () {
        cy.get('#no-content')
            .click()
        
        cy.assertResponse(this.linkResponses.no_content)
    })

    it('Verify that Moved link sends an API call and respond with status code 301', function () {
        cy.get('#moved')
            .click()
        
        cy.assertResponse(this.linkResponses.moved)
    })

    it('Verify that Bad Request link sends an API call and respond with status code 400', function () {
        cy.get('#bad-request')
            .click()
        
        cy.assertResponse(this.linkResponses.bad_request)
    })

    it('Verify that Unauthorized link sends an API call and respond with status code 401', function () {
        cy.get('#unauthorized')
            .click()
        
        cy.assertResponse(this.linkResponses.unauthorized)
    })

    it('Verify that Forbidden link sends an API call and respond with status code 403', function () {
        cy.get('#forbidden')
            .click()
        
        cy.assertResponse(this.linkResponses.forbidden)
    })

    it('Verify that Not Found link sends an API call and respond with status code 404', function () {
        cy.get('#invalid-url')
            .click()
        
        cy.assertResponse(this.linkResponses.not_found)
    })

    
})
