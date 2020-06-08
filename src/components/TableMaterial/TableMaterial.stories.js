import React from 'react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';

import format from 'utils/format';
import { story as TableMaterial } from './TableMaterial';

export default {
  title: 'Componentes|Tabla',
  component: TableMaterial,
};

const Table = () => (
  <TableMaterial
    columns={[
      {
        title: 'Columna 1',
        field: 'column',
      },
      {
        title: 'Columna 2',
        field: 'date',
        render: ({ date }) => format.date(date),
      },
      {
        title: 'Columna 3',
        field: 'column3',
      },
    ]}
    data={[{ column: 'Valor 1', date: new Date(), column3: 'Otro valor' }]}
    title="Mi tabla"
    refresh={action('Actualiza la tabla')}
    onRowClick={action('Se ha pulsado en una fila')}
    count={number('Numero de elementos', 20)}
  />
);

Table.story = {
  name: 'Estandar',
};

export { Table };
