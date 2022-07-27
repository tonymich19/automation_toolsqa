/// <reference types="cypress" />

describe('testing webtables elements from ToolsQA', () => {
    beforeEach(() => {
        cy.visit('/webtables')
    })

    it('Verify that all boxes inside the Downloads toggle have been selected when checking Downloads', () => {
        cy.get(".rt-tr > :nth-child(2)")
        .each(($e1, index) => { //iterating through array of elements
            const StoreText = $e1.text();      //storing iterated element
            if (StoreText.includes("Vega")) {
                cy.log('açooooou')
                //If text found,iteration stops
                cy.get("td:nth-child(2)")       //gets the CSS of second column
                    .eq(index)                      //grabs the content in index value
                    .then(function (Taskcolumn) {
                        const Tasktext = Taskcolumn.text();
                        expect(Tasktext).to.equal("Wireframes");
                        //assertion to verify text
                        // Do something with this specific element...
                    })
            }
        })
    })

    it('Verify that a new registry is created when completing Add form', () => {
        cy.clickAddButton()
        cy.typeFirstName('Arnold')
        cy.typeLastName('Schwarzenegger')
        cy.typeEmail('arnold@aschnegg.er')
        cy.typeAge('56')
        cy.typeSalary('90000000000')
        cy.typeDepartment('The Terminator')
        cy.clickSubmitButton()
    })

    it('Verify that registry changes when editing', () => {
        cy.clickEditButton()
        cy.typeFirstName('Arnold')
        cy.typeLastName('Schwarzenegger')
        cy.typeEmail('arnold@aschnegg.er')
        cy.clickSubmitButton()
        cy.assertToHave('Arnold')
        cy.assertToHave('Schwarzenegger')
        cy.assertToHave('arnold@aschnegg.er')
    })

    it('Verify that registry is exclude when deleting', () => {
        cy.clickDeleteButton()
        cy.assertToNotHave('Cierra')
    })

    it('Verify that search return the right result', () => {
        cy.clickAddButton()
        cy.typeFirstName('Arnold')
        cy.typeLastName('Schwarzenegger')
        cy.typeEmail('arnold@aschnegg.er')
        cy.typeAge('56')
        cy.typeSalary('900000')
        cy.typeDepartment('The Terminator')
        cy.clickSubmitButton()
        cy.search('Arnold')
        cy.assertToHave('Arnold')
        cy.assertToHave('Schwarzenegger')
        cy.assertToHave('arnold@aschnegg.er')
        cy.assertToHave('56')
        cy.assertToHave('900000')
        cy.assertToHave('The Terminator')
    })

    it.only('Verify that pagination works', () => {
        cy.clickAddButton()
        cy.typeFirstName('jose')
        cy.typeLastName('Schwarzenegger')
        cy.typeEmail('arnold@aschnegg.er')
        cy.typeAge('56')
        cy.typeSalary('900000')
        cy.typeDepartment('The Terminator')
        cy.clickSubmitButton()
        cy.clickAddButton()
        cy.typeFirstName('Arnold')
        cy.typeLastName('Schwarzenegger')
        cy.typeEmail('arnold@aschnegg.er')
        cy.typeAge('56')
        cy.typeSalary('900000')
        cy.typeDepartment('The Terminator')
        cy.clickSubmitButton()
        cy.clickAddButton()
        cy.typeFirstName('splinter')
        cy.typeLastName('Schwarzenegger')
        cy.typeEmail('arnold@aschnegg.er')
        cy.typeAge('56')
        cy.typeSalary('900000')
        cy.typeDepartment('The Terminator')
        cy.clickSubmitButton()
        cy.setPagination(5)
        cy.assertNumberOfPages(2)
    })

})