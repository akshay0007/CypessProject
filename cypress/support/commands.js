Cypress.Commands.add("forgot", (user) => {
  cy.visit("https://demo.wpjobboard.net/wp-login.php?action=lostpassword");
  cy.get("input[name=user_login]").clear().type(user);
  cy.get("input[type=submit]").click();
});
