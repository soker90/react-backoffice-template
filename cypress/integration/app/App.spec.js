describe ('<App />', () => {
  before(() => {
    cy.server();
    cy.setRoute({url: '**/monit/**'}, 'monit', 'monit.json');
    cy.visit('/');
  });
  it ('Render sin errores', () => {
    cy.get("h2").contains("Inicio de Sesión");
  });
});
