// test login route  & navigate to Dashboard on successful login
describe("User Login", () => {
  it("Sign in", () => {
    cy.login();
  });
});

// describe("foodladder", () => {
//   it("returns JSON", () => {
//     cy.request("/dashboard")
//       .its("headers")
//       .its("content-type")
//       .should("include", "application/json");
//   });
// });
