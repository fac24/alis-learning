describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

//Routes
describe("Get started route", () => {
  it("Visiting the Avatars Page", () => {
    cy.visit("/");
    cy.get("h1").contains("Alis Learning");
    cy.get('#get_started').click();
    cy.url().should("include", "/learner-onboarding/avatar-selection")
      .get("div").contains("Pick your avatar");
  
  });
});
