/// <reference types="cypress" />


describe("selectors validation", function () {

    it("checked fields", function() {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
        cy.get("input[type=checkbox]").check(['Cricket'])
        cy.get("#checkbox1").uncheck().should('not.be.checked')

    })


    it("Drop down", function() {
        cy.get('#Skills').select('AutoCAD').should('have.value','AutoCAD')
    })

    it("Multiselect", function() {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
    })

});
