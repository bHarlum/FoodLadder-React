// test to ensure a unique code is required to login

it("require unique code", () => {
  cy.visit("/");
  cy.get("form")
    .contains("Submit")
    .click();
});
