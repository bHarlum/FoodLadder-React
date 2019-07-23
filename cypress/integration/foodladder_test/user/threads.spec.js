// test login route  & navigate to Dashboard on successful login
describe("User Create new thread", () => {
  it("new thread", () => {
    const thread = {
      title: "Islamabad",
      body:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };

    cy.login();
    cy.url().should("include", "/dashboard");
    cy.visit("/forum/threads/new");
    cy.get("[name=title]").type(thread.title);
    cy.get('[name="body"]').type(thread.body);
    cy.get('[type="submit"]').click();
  });
});
