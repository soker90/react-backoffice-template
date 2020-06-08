function inteceptorRoute(responseJson, status = 200) {
  cy.setRoute({url: '**/user/v0/**'}, 'search', responseJson, {status});
}

describe('<TopBar />', () => {
  beforeEach(() => {
    cy.login('admin');
    cy.server();
    cy.setRoute({url: '**/monit/**'}, 'monit', 'monit.json');
    cy.visit('/');
  });
  describe('<Search />', () => {
    beforeEach(() => {
      cy.get('[data-cy=search-button]').click();
    })

    it('Busqueda por email sin resultados', () => {
      cy.get('[data-cy=email]').type('fallo@fallo.es');
      inteceptorRoute('search/noClients.json');
      cy.get('[data-cy=email]').type('{enter}');
      cy.wait('@search')
      cy.get('[data-cy=notification]').contains('No se han encontrado coincidencias.');
      cy.get('[data-cy=search-results]').should('not.exist');
    });
    it('Busqueda por email con resultados', () => {
      cy.get('[data-cy=email]').type('test@email.com');
      inteceptorRoute('search/foundClient.json');
      cy.get('[data-cy=email]').type('{enter}');
      cy.wait('@search')
      cy.get('[data-cy=notification]').should('not.exist');
      cy.url().should('include', '/app/customercare/client')
    });
    it('Busqueda por userId sin resultados', () => {
      cy.get('[data-cy=userId]').type('0000');
      inteceptorRoute('search/noClients.json');
      cy.get('[data-cy=userId]').type('{enter}');
      cy.wait('@search')
      cy.get('[data-cy=notification]').contains('No se han encontrado coincidencias.');
      cy.get('[data-cy=search-results]').should('not.exist');
    });
    it('Busqueda por userId con resultados', () => {
      cy.get('[data-cy=userId]').type('15463');
      inteceptorRoute('search/foundClient.json');
      cy.get('[data-cy=userId]').type('{enter}');
      cy.wait('@search')
      cy.get('[data-cy=notification]').should('not.exist');
      cy.url().should('include', '/app/customercare/client')
    });
  })

  it('Abrir y cerrar panel de configuracion', () => {
    cy.get('[data-cy=settings-button]').click();
    cy.get('[data-cy=select-theme]').should('exist');
    cy.get('body').click();
    cy.get('[data-cy=select-theme]').should('not.exist');
  })

  describe('<Settings />', () => {
    beforeEach(() => {
      cy.get('[data-cy=settings-button]').click();
    })

    it('Seleccionar tema unicornio', () => {
      cy.get('[data-cy=select-theme]').select('UNICORN');
      cy.get('[data-cy=button-theme]').click()
      cy.get('[data-cy=topbar]').should('have.css', 'background-color', 'rgb(166, 125, 255)')
    });

    it('Seleccionar tema oscuro', () => {
      cy.get('[data-cy=select-theme]').select('ONE_DARK');
      cy.get('[data-cy=button-theme]').click()
      cy.get('[data-cy=topbar]').should('have.css', 'background-color', 'rgb(40, 44, 52)')
    });

    it('Seleccionar tema claro', () => {
      cy.get('[data-cy=select-theme]').select('LIGHT');
      cy.get('[data-cy=button-theme]').click()
      cy.get('[data-cy=topbar]').should('have.css', 'background-color', 'rgb(240, 98, 146)')
    });
  })

  it('Abrir y cerrar panel de cuenta', () => {
    cy.get('[data-cy=account-button]').click();
    cy.get('[data-cy=menu-permissions]').should('be.visible');
    cy.get('body').click();
    cy.get('[data-cy=menu-permissions]').should('not.be.visible');
  })

  describe('<Account />', () => {
    beforeEach(() => {
      cy.get('[data-cy=account-button]').click();
    })

    it('Navegar a la pantalla de permisos', () => {
      cy.get('[data-cy=menu-permissions]').click();
      cy.url().should('include', '/permissions')
    })

    it('Cerrar sesion', () => {
      cy.get('[data-cy=menu-logout]').click();
      cy.url().should('include', '/login')
    })

  })

});
