
function inteceptorRoute(responseJson, status = 200) {
  cy.setRoute({url: '**/search/**'}, 'search', responseJson, {status});
}

describe('<Search />', () => {
  beforeEach(() => {
    cy.server()
    cy.login('admin');
    cy.setRoute({url: '**/monit/**'}, 'monit', 'monit.json');
    cy.visit('/app/customercare/search');
  });
  it('Limpiar inputs', () => {
    cy.get('[data-cy=email]').type('test');
    cy.get('[data-cy=userId]').type('test');
    cy.get('[data-cy=btn-clean').click();
    cy.get('[data-cy=email]').should('have.value', '');
    cy.get('[data-cy=userId]').should('have.value', '');
  });
  it('Busqueda por email sin resultados', () => {
    inteceptorRoute('search/noClients.json');
    cy.get('[data-cy=email]').type('fallo@fallo.es{enter}');
    cy.wait('@search')
    cy.get('[data-cy=notification]').contains('No se han encontrado coincidencias.');
    cy.get('[data-cy=search-results]').should('not.exist');
  });
  it('Busqueda por email con resultados', () => {
    inteceptorRoute('search/foundClient.json');
    cy.get('[data-cy=email]').type('test@email.com{enter}');
    cy.wait('@search');
    cy.get('[data-cy=notification]').should('not.exist');
    cy.url().should('include', '/app/customercare/client')
  });
  it('Busqueda por userId con resultados', () => {
    inteceptorRoute('search/foundClient.json');
    cy.get('[data-cy=userId]').type('15463{enter}');
    cy.wait('@search')
    cy.get('[data-cy=notification]').should('not.exist');
    cy.url().should('include', '/app/customercare/client')
  });
});
