/// <reference types="cypress" />

describe('visit to about', () => {
  before(() => {
    cy.visit('/');

    cy.get('nav > ul').as('wrapper');
  });

  it('routes about', () => {
    cy.get('@wrapper').contains('About us').click();

    cy.get('.pageTitle').should('contain.text', 'About');
  });
});
