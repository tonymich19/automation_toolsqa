Cypress.Commands.add('clickAddButton', ()=>{
    cy.get('#addNewRecordButton')
    .click()
})

Cypress.Commands.add('typeFirstName', (name) => {
    cy.get('#firstName')
    .clear()
    .type(name)
})

Cypress.Commands.add('typeLastName', (lastName) => {
    cy.get('#lastName')
    .clear()
    .type(lastName)
})

Cypress.Commands.add('typeEmail', (email) => {
    cy.get('#userEmail')
    .clear()
    .type(email)
})

Cypress.Commands.add('typeAge', (age) => {
    cy.get('#age')
    .clear()
    .type(age)
})

Cypress.Commands.add('typeSalary', (salary) => {
    cy.get('#salary')
    .clear()
    .type(salary)
})

Cypress.Commands.add('typeDepartment', (department) => {
    cy.get('#department')
    .clear()
    .type(department)
})

Cypress.Commands.add('clickSubmitButton', () =>{
    cy.get('#submit')
    .click()
})

Cypress.Commands.add('clickEditButton', () =>{
    cy.get('#edit-record-1 > svg')
    .click()
})

Cypress.Commands.add('assertToHave', (text) =>{
    cy.get('.rt-tbody')
        .each(($e1, index) => { 
            const storeText = $e1.text(); 
            cy.log(storeText)  
            expect(storeText).to.include(text)
        })
})

Cypress.Commands.add('clickDeleteButton', () =>{
    cy.get('#delete-record-1 > svg').click()
})

Cypress.Commands.add('assertToNotHave', (text) =>{
    cy.get('.rt-tbody')
        .each(($e1, index) => { 
            const storeText = $e1.text(); 
            cy.log(storeText)  
            expect(storeText).to.not.include(text)
        })
})

Cypress.Commands.add('search', (text) =>{
    cy.get('#searchBox')
    .type(text, '{enter}')
})

Cypress.Commands.add('', () =>{
    cy.get('#submit').click()
})

Cypress.Commands.add('setPagination', (number) =>{
    cy.get('select')
    .select(`${number} rows`)
})

Cypress.Commands.add('assertNumberOfPages', (number) => {
    cy.get('.-totalPages')
    .should('contain', number)

    cy.get('.-next > .-btn')
    .should('be.enabled')
})