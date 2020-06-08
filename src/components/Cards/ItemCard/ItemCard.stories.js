import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import ThemeWrapper from 'story/ThemeWrapper';
import { Card, CardContent } from '@material-ui/core';
import { story as ItemCard } from './ItemCard';

export default {
  title: 'Componentes|Item Card',
  parameters: {
    component: ItemCard,
    componentSubtitle: 'Muestra datos del tipo [Texto: valor] dentro de una tarjeta',
  },
};

const Item = () => (
  <ThemeWrapper>
    <Card>
      <CardContent>
        <ItemCard
          value={text('Texto', 'Mi texto')}
          label={text('Etiqueta', 'Etiqueta')}
          divider={boolean('Separador', true)}
        />
      </CardContent>
    </Card>
  </ThemeWrapper>
);

Item.story = {
  name: 'Item Card',
};

export { Item };
