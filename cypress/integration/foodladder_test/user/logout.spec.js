// test logout  & not allowed to access Dashboard
describe("User Logout", () => {
  it("Log Out", () => {
    cy.login();
    cy.get("header")
      .contains("Logout")
      .click({ force: true });
    cy.visit("/forum");
    cy.visit("/dashboard");
  });
});
