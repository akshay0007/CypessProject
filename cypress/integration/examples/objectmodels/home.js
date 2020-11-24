///<reference types="Cypress"/>

class Home {
  clickJobsTest() {
    cy.get("#menu-item-2972 > a").click();
    return this;
  }

  clickPostJobsTest() {
    cy.get("#menu-item-2974 > a").click();
    return this;
  }

  clickResumeTest() {
    cy.get("#menu-item-2970 > a").click();
    return this;
  }

}

export default Home;
