/// <reference types="Cypress" />

import cy from 'cypress';
import Contacts from '../../src/components/Contacts';

describe('Contacts', () => {
  it('renders a list of contacts', () => {
    cy.visit('http://localhost:5173/');

    cy.get(Contacts).find('ul').find('li').should('have.length', 3);
  });
});
