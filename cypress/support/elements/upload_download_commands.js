import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand();


Cypress.Commands.add('uploadFile', (file) => {
    cy.get('#uploadFile')
        .attachFile(file)

    cy.get('#uploadedFilePath')
        .should('contains.text', `C:\\fakepath\\${file}` )
})
