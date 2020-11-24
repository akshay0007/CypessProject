/// <reference types="cypress" />

import Home from "../examples/objectmodels/Home";

describe("homepage", function () {
  before(function () {
    console.log("before");
  });

  beforeEach(function () {
    cy.visit("https://demo.wpjobboard.net/");
  });

  afterEach(function () {
    console.log("after each");
  });

  after(function () {
    console.log("after");
  });

  it("home page click jobs", function () {
    var field = new Home();
    field.clickJobsTest();
    cy.get("#post-2957 > header > h1").contains("Jobs");
  });

  it("home page clickpostjobs", function () {
    var field = new Home();
    field.clickPostJobsTest();
    cy.get("#post-2958 > header > h1").contains("Post a Job");  
  });

  it("home page resume", function () {
    var field = new Home();
    field.clickResumeTest();
    cy.get("#post-2960 > header > h1").contains("Resumes");  
  });
});
