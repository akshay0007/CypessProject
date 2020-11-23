/// <reference types="cypress" />

import Home from "../examples/objectmodels/Home";

describe("homepage", function () {
  before(function () {
    console.log("before");
  });

  beforeEach(function () {
    cy.visit("https://abstracta.us/");
  });

  it("home page clickEndtoEndTest", function () {
    var field = new Home();
    field.clickEndtoEndTest();
    cy.get(
      "#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > h1.solutions"
    ).contains("End-to-End Software");
  });

  it("home page clickTestAutomationTest", function () {
    var field = new Home();
    field.clickTestAutomationTest();
    cy.get(
      "#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > h1.solutions"
    ).contains("Test Automation");
  });

  it("home page mobileTest", function () {
    var field = new Home();
    field.mobileTest();
    cy.get(
      "#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > h1.solutions"
    ).contains("Mobile Testing");
  });
});

afterEach(function () {
  console.log("after each");
});

after(function () {
  console.log("after");
});
