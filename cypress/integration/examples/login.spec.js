/// <reference types="cypress" />

// login details
import Login from "../examples/objectmodels/Login";

describe("Login validation", function () {
  beforeEach(function () {
    cy.visit(
      "https://demo.wpjobboard.net/wp-login.php?loggedout=true&wp_lang=en_US"
    );
  });

  it("valid login", function () {
    var login = new Login();
    login.fillLogin("user", "user");
    login.clickSubmit();
    cy.log("************login attempt")
    cy.get("#profile-page > h1").contains("Profile");
  });
});
