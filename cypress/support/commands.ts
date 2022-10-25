Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test-id=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
    return cy.get(`[data-test-id*=${selector}]`, ...args);
});

const storybookUrl = "http://localhost:38080/";

Cypress.Commands.add("loadStory", (storyName) => {
    const componentUrl = `${storybookUrl}iframe.html?id=${storyName}`;
    cy.visit(componentUrl);
});
