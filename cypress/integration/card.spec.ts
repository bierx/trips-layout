describe("Trips", () => {
    beforeEach(() => {
        cy.loadStory("card--default");
    });

    context("With heading", () => {
        it("has heading", () => {
            cy.getBySel("heading").should("have.text", "European Quest");
        });
    });

    context("With description", () => {
        it("has description", () => {
            cy.getBySel("description").should(
                "have.text",
                "8 Countries, 21 days",
            );
        });
    });

    context("With emission", () => {
        it("has description", () => {
            cy.getBySel("emission-description").should(
                "have.text",
                "810 kg CO₂e",
            );
        });
    });

    context("With rating", () => {
        it("has rating", () => {
            cy.getBySel("rating").should("have.text", "4.7");
        });
    });
});
