describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("visit homepage", () => {
  it("passes", () => {
    cy.visit("/");
  });
});
