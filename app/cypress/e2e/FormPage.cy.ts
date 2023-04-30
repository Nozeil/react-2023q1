/// <reference types="cypress" />

describe('form page', () => {
  it('should show form card', () => {
    cy.visit('/form');
    cy.get('[data-testid="name"]').type('Name');
    cy.get('[data-testid="surname"]').type('Surname');
    cy.get('[data-testid="date"]').type('2000-02-02');
    cy.get('[data-testid="country"]').select('Belarus');
    cy.get('[data-testid="consent"]').check();
    cy.get('[data-testid="image"]').selectFile('cypress/fixtures/test.png', { force: true });
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="formCard"]').should('exist');
  });
});
