/// <reference types="cypress" />

import ContactUs from "../examples/objectmodels/ContactUs";

describe("contactus", function () {
  before(function () {
    console.log("before");
    cy.fixture("example").then(function (data) {
        this.data=data
    })
  });

  beforeEach(function () {
    cy.visit("https://abstracta.us/contact-us");
  });

  it("fill correct form", function () {
      const contact = new ContactUs();
      contact.fillFullName(this.data.fullname);
      contact.fillOrganization(this.data.organization);
      contact.fillRole(this.data.role);
      contact.fillEmail(this.data.email);
      contact.fillPhone(this.data.phone);
      contact.fillMessage(this.data.message);
      contact.selecttandc();
      cy.get(
        "#home > div.col-lg-offset-1.col-md-offset-1.col-lg-5.col-md-5.col-xs-12.col-sm-12.lets-talk-form > div > div > button"
      ).click();
      cy.get(
        "#home > div.col-lg-offset-1.col-md-offset-1.col-lg-5.col-md-5.col-xs-12.col-sm-12.lets-talk-form > div > div > div.form-thank-you"
      ).contains("Thanks for contacting");
    });
  });

  afterEach(function () {
    console.log("after each");
  });

  after(function () {
    console.log("after");
  });

