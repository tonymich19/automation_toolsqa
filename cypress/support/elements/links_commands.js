Cypress.Commands.add('assertResponse', (text) => {
    cy.get('#linkResponse')
        .invoke('text')
        .then((textValue) => {
            expect(textValue).equal(text)
        })    
})