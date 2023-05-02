describe('Not found', () => {
  it('routes not found', () => {
    cy.visit('/404');

    cy.get('.pageTitle').should('contain.text', 'Not found(404)');
  });
});
