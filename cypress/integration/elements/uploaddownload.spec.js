/// <reference types="cypress" />

describe('testing upload and download elements from ToolsQA', () => {
    beforeEach( function (){
        cy.visit('/upload-download')
        cy.fixture('example').then((example) => {
            this.example = example
          })
    })

    it('Verify that file is upaloaded', () => {
        const cvFile = 'English CV - Tony Correia'
        cy.uploadFile(cvFile)
    })

    /* this scenarios was modified to download a diferent file from the ToolsQA
    for not being a valid https download link to the file */
    it('Verify that file is downloaded', function() {
        const file = 'sampleFile.jpeg'

        cy.downloadFile(this.example.download,'cypress/downloads', file)
        cy.verifyDownload(file);

    })

})