/// <reference types="cypress" />

describe('home page', () => {
  beforeEach(() => cy.visit('/'));
  it('should show cards', () => {
    cy.get('[data-testid="cards-list"]').should('exist').as('cards-list');
    cy.get('@cards-list').children().should('have.length.greaterThan', 1);
  });
  it('should show modal after click', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="modal"]').should('exist');
  });
});
