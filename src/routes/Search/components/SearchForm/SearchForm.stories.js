import React from 'react';
import { action } from '@storybook/addon-actions';

import RoutesWrapper from 'story/RoutesWrapper';
import ReduxProvider from 'story/ReduxProvider';
import { story as SearchForm } from './SearchForm';

export default {
  title: 'Rutas|Búsqueda/Formulario',
  parameters: {
    component: SearchForm,
    componentSubtitle: 'Formulario de búsqueda de clientes',
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <RoutesWrapper>{storyFn()}</RoutesWrapper>
    </ReduxProvider>
  ),
  ],
};

const Search = () => (
  <SearchForm
    searchClients={action('Busca el cliente con los parámetros introducidos')}
  />
);

Search.story = {
  name: 'Formulario',
};

export { Search };
