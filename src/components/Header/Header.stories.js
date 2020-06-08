import React from 'react';

import { text } from '@storybook/addon-knobs';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as Header } from './Header';

export default {
  title: 'Componentes|Cabecera',
  parameters: {
    component: Header,
  },
  decorators: [storyFn => <RoutesWrapper>{storyFn()}</RoutesWrapper>],
};

const HeaderStory = () => (
  <Header
    routes={[
      { link: '#', title: text('Título primero', 'Primero') },
      { link: '#', title: text('Título segundo', 'Segundo') },
    ]}
    title={text('Titulo', 'Mi página')}
  />
);

HeaderStory.story = {
  name: 'Cabecera de rutas',
};

export { HeaderStory };
