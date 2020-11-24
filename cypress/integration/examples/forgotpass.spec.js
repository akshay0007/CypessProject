/// <reference types="cypress" />

describe("MYTestSuite", function() {
  it("forget pass", function(){
    cy.forgot("user");
    cy.get("#login > p:nth-child(3)").contains(
      "Check your email for the confirmation link"
    );
  });
});
