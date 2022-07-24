require('cypress-xpath');

/***************** Expand Content ********************/
Cypress.Commands.add('expandAll', () =>{
    cy.get('.rct-option-expand-all').click()
})

Cypress.Commands.add('expandHome', () =>{
    cy.get('.rct-collapse > .rct-icon').click()
})

Cypress.Commands.add('expandDesktop', () =>{
    cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon').click()
})

Cypress.Commands.add('expandDocuments', () =>{
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .rct-text > .rct-collapse').click()
})

Cypress.Commands.add('expandDownloads', () =>{
    cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon').click()
})

/***************** Collapse Content ********************/
Cypress.Commands.add('collapseAll', () =>{
    cy.get('.rct-option-collapse-all').click()
})

Cypress.Commands.add('collapseHome', () =>{
    cy.get('.rct-node-expanded > :nth-child(1) > .rct-collapse > .rct-icon').click()
})

Cypress.Commands.add('collapseDesktop', () =>{
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse > .rct-icon')
    .click()
})

Cypress.Commands.add('collapseDocuments', () =>{
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse > .rct-icon')
    .click()
})

Cypress.Commands.add('collapseDownloads', () =>{
    cy.get(':nth-child(3) > :nth-child(1) > .rct-collapse > .rct-icon').click()
})

/***************** Checks ********************/
Cypress.Commands.add('checkHome', () =>{
    cy.get('.rct-checkbox').first().click()
    
})


Cypress.Commands.add('checkSpan', (wordCheck) =>{
    cy.xpath(`//span[@class="rct-title"][contains(text(),"${wordCheck}")]`).click()
    
})

Cypress.Commands.add('', () =>{
    
})

Cypress.Commands.add('', () =>{
    
})

/***************** Assertions ********************/

Cypress.Commands.add('assertHaveSelected', (wordCheck) =>{
    cy.xpath(`//div[@id=\'result\']/span[contains(text(),'${wordCheck}')]`)
})