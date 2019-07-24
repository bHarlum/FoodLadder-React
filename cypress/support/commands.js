// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add("login", () => {
  const user = {
    email: "nate+1@test.com",
    password: "123456"
  };

  cy.visit("/login");
  cy.get('[type="text"]').type(user.email);
  cy.get('[type="password"]').type(user.password, { log: false });
  cy.get("form")
    .contains("Log in")
    .click();
});

Cypress.Commands.add("new_project", () => {
  const project = {
    name: "Islamabad Greenhouse Development",
    line1: "123 Capitol Hill",
    line2: "Islamabad",
    postcode: "90210",
    city: "Islamabad",
    state: "Central Iran",
    country: "Iran",
    email: "admin@test.com",
    admin_name: "Admin"
  };

  cy.login();
  cy.url().should("include", "/dashboard");
  cy.visit("/projects/new");
  cy.get("[name=projectName]").type(project.name);
  cy.get('[name="line1"]').type(project.line1);
  cy.get('[name="line2"]').type(project.line2);
  cy.get('[name="postcode"]').type(project.postcode);
  cy.get('[name="city"]').type(project.city);
  cy.get('[name="state"]').type(project.state);
  cy.get('[name="country"]').type(project.country);
  cy.get('[name="email"]').type(project.email);
  cy.get('[name="userName"]').type(project.admin_name);
  cy.get('[type="submit"]').click();
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
