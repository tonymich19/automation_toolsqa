// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clearAndType', (ele, input) => {

    cy.get(ele)
        .clear()
        .type(input)
})

Cypress.Commands.add('setDate', (date) => {
    cy.get('#dateOfBirthInput')
            .click()
            .type('{selectall}')
            .type(date)

})

Cypress.Commands.add('selectFromAutoComplete', (input, select) =>{
    cy.get('.subjects-auto-complete__value-container')
            .type(input)

    cy.xpath('//div[@class="subjects-auto-complete__menu-list subjects-auto-complete__menu-list--is-multi css-11unzgr"]/div')
        .each(function($ele, index, $list){
            if($ele.text().includes(select)){
                cy.wrap($ele).click()
                
                return false
            }
            else {
                cy.log(select, ' not found')
            }
        })
})


Cypress.Commands.add('uploadPicture', (file) => {
    cy.get('#uploadPicture')
        .attachFile(file)
})

Cypress.Commands.add('selectState', (state) => {
    cy.get('#state > .css-yk16xz-control')
            .click()
    cy.xpath('//div[@class= " css-11unzgr"]/div')
        .each(function($ele, index, $input){
            if($ele.text().includes(state)){
                cy.wrap($ele).click()
                return false
            }
            else {
                cy.log($ele.text())
            }
        })
})

Cypress.Commands.add('selectCity', (city) => {
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
            .click()
    cy.xpath('//div[@class=" css-11unzgr"]/div')
        .each(function($ele, index, $input){
            if($ele.text().includes(city)){
                cy.wrap($ele).click({force: true})
                return false
            }
            else {
                cy.log($ele.text())
            }
        })
})