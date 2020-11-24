///<reference types="Cypress"/>

class Login {
  //user user
  fillLogin(email, password) {
    cy.get("#user_login").clear().type(email);
    cy.get("#user_pass").clear().type(password);
  }


  clickSubmit(){
    cy.get('#wp-submit').click();
  }
}

export default Login