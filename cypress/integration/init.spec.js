// test to ensure Cypress is running
describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

// test to ensure we can visit the app
it("visits the app", () => {
  cy.visit("/");
});
