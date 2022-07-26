describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

// ✅ --- PASSING ---
describe("Get started route", () => {
  it("Visiting the Avatars Page", () => {
    cy.visit("/");
    cy.get("h1").contains("Alis Learning");
    cy.get("#get_started").click();
    cy.intercept("/learner-onboarding/avatar-selection");
    cy.intercept({
      method: "GET",
      url: "/avatars",
      hostname: "localhost",
    });
    cy.get('main').contains("snail.svg");
  });
});


