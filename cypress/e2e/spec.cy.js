describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

// // ✅ --- PASSING ---
// describe("Get started route", () => {
//   it("Visiting the Avatars Page", () => {
//     cy.visit("/");
//     cy.get("h1").contains("Alis Learning");
//     cy.get("#get_started").click();
//     cy.intercept("/learner-onboarding/avatar-selection");
//     cy.intercept({
//       method: "GET",
//       url: "/avatars",
//       hostname: "localhost",
//     });
//     cy.get("main").contains("snail.svg");
//   });
// });

// // ✅ --- PASSING ---
// describe("Parent route", () => {
//   it("should be navigate all pages through the parent route", () => {
//     cy.visit("/");
//     cy.get("h1").contains("Alis Learning");
//     cy.get("h1").should("not.contain", "Feedback Form");
//     cy.contains("Go to parents section").click();
//     cy.url().should("include", "/adult-onboarding1");
//     cy.contains("How can Alis Learning help with dyslexia?").click().end();
//     cy.contains("Get a learner started").click();
//     cy.url().should("include", "/adult-onboarding2");
//     cy.contains("Welcome!");
//     cy.contains("Next").click();
//     cy.url().should("include", "/adult-onboarding3");
//     cy.get("main").find("input");
//     cy.contains("Next").click();
//     cy.location("pathname").should("eq", "/adult-onboarding4");
//     cy.get("main").find("form");
//     cy.wait(0);
//     cy.contains("Next").click();
//     // cy.wait();
//     cy.url().should("include", "/adult-onboarding5");
//     cy.contains("Great");
//     cy.go("back");
//   });
// });

// // ✅ --- PASSING ---
// describe("Location", () => {
//   it("should assert location", () => {
//     cy.visit("http://localhost:3000/learner-onboarding/font-selection");

//     cy.location().should((loc) => {
//       expect(loc.host).to.eq("localhost:3000");
//       expect(loc.hostname).to.eq("localhost");
//       expect(loc.href).to.eq(
//         "http://localhost:3000/learner-onboarding/font-selection"
//       );
//       expect(loc.origin).to.eq("http://localhost:3000");
//       expect(loc.pathname).to.eq("/learner-onboarding/font-selection");
//       expect(loc.port).to.eq("3000");
//       expect(loc.protocol).to.eq("http:");
//       expect(loc.toString()).to.eq(
//         "http://localhost:3000/learner-onboarding/font-selection"
//       );
//     });
//   });
// });


describe("checking the 404 page", () => {
  it("can't find the page", () => {
    cy.visit("/child-landing");
    cy.contains('Story Time').click();
    cy.url().should("include", "/404");
    cy.get("h1").should("not.contain", "Cinderella");
  });
});