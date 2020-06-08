// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { BCT_TOKEN } from '../../src/config';
import adminSuccess from '../fixtures/login/adminSuccess.json';

Cypress.Commands.add('login', userType => {
  const users = {
    admin: {
      username: 'test',
      password: 'prueba',
    },
  };

  const user = users[userType];
  if (Cypress.env('MOCK')) {
    const { data } = adminSuccess;
    localStorage.setItem(BCT_TOKEN, data.token);
  } else {
    cy.request({
      url: `${Cypress.env().HOST}/login`,
      method: 'POST',
      body: user,
    })
      .its('body')
      .then(({ data }) => {
        localStorage.setItem(BCT_TOKEN, data.token);
      });
  }
});

Cypress.Commands.add('setRoute', (options, alias, json, mockOptions = {}) => {
  cy.log(Cypress.env('MOCK'));
  Cypress.env('MOCK')
    ? cy.route({ ...options, ...mockOptions, response: `fixture:${json}` }).as(alias)
    : cy.route(options).as(alias);
});
