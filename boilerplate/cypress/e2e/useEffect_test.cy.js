describe("App", () => {
  it("displays a list of users", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("contain", "Users");
    cy.get("li").should("have.length.greaterThan", 0);
  });
});
