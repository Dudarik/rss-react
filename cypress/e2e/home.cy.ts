import { API_GAMES_URL } from '../../src/config/API_paths';

describe('Just visit to home page', () => {
  it('should visit', () => {
    cy.visit('/');
  });
});

describe('searches cards', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('#card_list').as('cardList');
  });

  it('input test', () => {
    const inputStr = 'Dune';
    cy.get('#searchForm').as('form').last().submit();
    cy.get('#searchString').as('input').last().type(inputStr).should('have.value', inputStr);
    cy.intercept('GET', `${API_GAMES_URL}?title_like=${inputStr}`, {
      statusCode: 200,
    }).as('getRequest');
  });
  it('cardList should be 1 items', () => {
    cy.get('@cardList').should('have.length', 1);
  });

  it('should have additional info', () => {
    cy.get('a[href="/games/1"]').click();
    cy.get('.fa-solid').should('have.class', 'fa-person');
  });
});

export {};
