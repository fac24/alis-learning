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
    // cy.get("main").find(".Comic");
  });
});

// ✅ --- PASSING ---
describe("Parent route", () => {
  it("should be navigate all pages through the parent route", () => {
    cy.visit("/");
    cy.get("h1").contains("Alis Learning");
    cy.get("h1").should("not.contain", "Feedback Form");
    cy.contains("I'm a parent or teacher").click();
    cy.url().should("include", "/adult-onboarding1");
    cy.contains("How can Alis Learning help with dyslexia?").click().end();
    cy.contains("Get a learner started").click();
    cy.url().should("include", "/adult-onboarding2");
    cy.contains("Welcome!");
    cy.contains("Next").click();
    cy.url().should("include", "/adult-onboarding3");
    cy.get("main").find("input");
    cy.contains("Next").click();
    cy.location("pathname").should("eq", "/adult-onboarding4");
    cy.get("main").find("form");
    cy.wait(0);
    cy.contains("Next").click();
    // cy.wait();
    cy.url().should("include", "/adult-onboarding5");
    cy.contains("Great");
    cy.go("back");
  });
});

// ✅ --- PASSING ---
describe("Location", () => {
  it("should assert location", () => {
    cy.visit("http://localhost:3000/learner-onboarding/font-selection");

    cy.location().should((loc) => {
      expect(loc.host).to.eq("localhost:3000");
      expect(loc.hostname).to.eq("localhost");
      expect(loc.href).to.eq(
        "http://localhost:3000/learner-onboarding/font-selection"
      );
      expect(loc.origin).to.eq("http://localhost:3000");
      expect(loc.pathname).to.eq("/learner-onboarding/font-selection");
      expect(loc.port).to.eq("3000");
      expect(loc.protocol).to.eq("http:");
      expect(loc.toString()).to.eq(
        "http://localhost:3000/learner-onboarding/font-selection"
      );
    });
  });
});

// ✅ --- PASSING ---
describe("Checking the 404 page", () => {
  it("should redirect to 404 page if clicks fake links", () => {
    cy.visit("/child-landing");
    cy.contains("Story Time").click();
    cy.url().should("include", "/404");
    cy.get("h1").should("not.contain", "Cinderella");
  });
});

// ✅ --- PASSING ---
describe("window properties", () => {
  it("window should have a special properties", () => {
    cy.window().should("have.property", "top");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("not.contain", "Reading App");
  });
});

// ✅ --- PASSING ---
describe("Local storage", () => {
  it("Check if input name is stored", () => {
    cy.visit("/learner-onboarding/name");
    cy.get("#learnerName")
      .should("be.visible")
      .type("Potato")
      .should(() => {
        expect(localStorage.getItem("learner-name")).to.eq('"Potato"');
      });
    cy.visit("/child-landing");
    cy.get("h2").should("not.contain", "Hi, there");
    cy.contains("Hi, Potato!");
  });
});

// ✅ --- PASSING ---
describe("Does the data matches", () => {
  it("set of colours should be array of 8", () => {
    const colours = [
      { name: "grey", hex: "#d8d3d6" },
      { name: "green", hex: "#a8f29a" },
      { name: "blue", hex: "#96adfc" },
      { name: "yellow", hex: "#eddd6e" },
      { name: "turquiose", hex: "#aff7e1" },
      { name: "purple", hex: "#b987dc" },
      { name: "peach", hex: "#edd1b0" },
      { name: "blueGrey", hex: "#dbe1f1" },
    ];

    expect(colours).to.deep.equal([
      { name: "grey", hex: "#d8d3d6" },
      { name: "green", hex: "#a8f29a" },
      { name: "blue", hex: "#96adfc" },
      { name: "yellow", hex: "#eddd6e" },
      { name: "turquiose", hex: "#aff7e1" },
      { name: "purple", hex: "#b987dc" },
      { name: "peach", hex: "#edd1b0" },
      { name: "blueGrey", hex: "#dbe1f1" },
    ]);
  });
});
