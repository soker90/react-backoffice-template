function inteceptorRoute(responseJson, status = 200) {
  cy.setRoute({method: 'POST', url: '**/login/**'}, 'login', responseJson, {status});
}

describe('<Login />', () => {
  before(() => {
    cy.clearLocalStorage();
    cy.server();
    cy.setRoute({url: '**/monit/**'}, 'login', 'monit.json');
    cy.visit('/login');
  });
  beforeEach(() => {
    cy.server();
  })
  it('Se ha cargado correctamente', () => {
    cy.get('label:first').contains('Usuario / Correo electrónico');
    cy.get('label:last').contains('Contraseña');
  });
  it('Escribe el usuario', () => {
    cy.get('input:first').type('prueba');
    cy.get('input:last').type('test');
    cy.get('input:first').should('have.value', 'prueba')
    cy.get('input:last').should('have.value', 'test')
  });
  it('Introduce un usuario inexistente', () => {
    cy.log('entra');
    inteceptorRoute('login/invalidUser.json', 401);
    cy.get('button').click();
    cy.wait('@login')
    cy.get('div:last').contains('User not found');
    cy.url().should('include', '/login')
  });
  it('Introduce una contraseña incorrecta', () => {
    cy.get('input:first').clear();
    cy.get('input:last').clear();
    cy.get('input:first').type('test');
    cy.get('input:last').type('test');
    inteceptorRoute('login/invalidPassword.json', 401);
    cy.get('button').click();
    cy.wait('@login')
    cy.get('div:last').contains('User invalid login');
    cy.url().should('include', '/login')
  });
  it('Inicia sesión correctamente', () => {
    cy.get('input:first').clear();
    cy.get('input:last').clear();
    cy.get('input:first').type('test');
    cy.get('input:last').type('prueba');
    inteceptorRoute('login/adminSuccess.json');
    cy.get('input:last').type('{enter}');
    cy.wait('@login')
    cy.url().should('include', '/app/reports/dashboard')
  });
});
