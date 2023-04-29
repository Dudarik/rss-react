/// <reference types="cypress" />
import { API_GAMES_URL } from '../../../src/config/API_paths';

describe(`Check ${API_GAMES_URL} request`, () => {
  it('Get 200 status', () => {
    cy.request({
      method: 'GET',
      url: API_GAMES_URL,
    }).as('getEntries');

    cy.get('@getEntries').should((response: JQuery<HTMLElement>) => {
      expect((response as unknown as Response).status).to.eq(200);
      expect(response).to.have.property('headers');
      expect((response as unknown as Response).body).to.have.property('entries');
    });
  });
});
