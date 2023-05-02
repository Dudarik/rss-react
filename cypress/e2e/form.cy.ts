/// <reference types="cypress" />

describe('visit to form', () => {
  before(() => {
    cy.visit('/');

    cy.get('nav > ul').as('wrapper');
  });

  it('routes about', () => {
    cy.get('@wrapper').contains('Form').click();

    cy.get('.pageTitle').should('contain.text', 'Add new card');
  });
});
