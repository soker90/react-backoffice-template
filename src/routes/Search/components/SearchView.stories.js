import React from 'react';
import { action } from '@storybook/addon-actions';

import RoutesWrapper from 'story/RoutesWrapper';
import ReduxProvider from 'story/ReduxProvider';
import { story as SearchView } from './SearchView';

export default {
  title: 'Rutas|Búsqueda',
  parameters: {
    component: SearchView,
    componentSubtitle: 'Pantalla de búsqueda de clientes',
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <RoutesWrapper>{storyFn()}</RoutesWrapper>
    </ReduxProvider>
  )],
};

const Search = () => (
  <SearchView
    searchClients={action('Busca el cliente con los parámetros introducidos')}
  />
);

Search.story = {
  name: 'Vista',
};

export { Search };
