require('cypress-xpath');

Cypress.Commands.add('dynamicClick', () => {
    cy.xpath('//button[text() = "Click Me"]')
        .click()
})