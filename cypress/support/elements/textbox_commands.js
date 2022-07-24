Cypress.Commands.add('typeFullname', fullname => {
  cy.get('#userName')
    .should('be.visible')
    .clear()
    .type(`${fullname}`)
})

Cypress.Commands.add('typeEmail', email => {
  cy.get('#userEmail')
      .should('be.visible')
      .clear()
      .type(`${email}`)
  })

Cypress.Commands.add('typeCurrentAddress', currentAddress => {
    cy.get('#currentAddress')
      .should('be.visible')
      .clear()
      .type(`${currentAddress}`)
})

Cypress.Commands.add('typePermanentAddress', permanentAddress => {
    cy.get('#permanentAddress')
      .should('be.visible')
      .clear()
      .type(`${permanentAddress}`)
})

Cypress.Commands.add('submitTextBox', () =>{
  cy.get('#submit')
  .should('be.visible')
  .click()
})

Cypress.Commands.add('submitTextBox', () =>{
  cy.get('#submit')
  .should('be.visible')
  .click()
})

