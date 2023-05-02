/// <reference types="cypress" />

import './commands';
import '@cypress/code-coverage/support';

import { mount } from 'cypress/react18';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
