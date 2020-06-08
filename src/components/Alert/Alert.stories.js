import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { story as Alert } from './Alert';

export default {
  title: 'Componentes|Alerts',
  parameters: {
    component: Alert,
    componentSubtitle: 'Notificaciones permanentes',
  },
};


const AlertInfo = () => (
  <Alert
    message={text('Texto', 'Alert de informacion')}
    variant="info"
    onClose={() => action('Cerrar notificación')}
  />
);

AlertInfo.story = {
  name: 'Información',
  parameters: { docs: { storyDescription: 'Alert para mostrar mensajes informativos' } },
};

const AlertDefault = () => (
  <Alert
    message={text('Texto', 'Alert predeterminado')}
    variant="default"
  />
);

AlertDefault.story = {
  name: 'Predeterminada',
  parameters: { docs: { storyDescription: 'Alert predeterminado, puede usarse alternandose con el de infomación ' } },
};

const AlertSuccess = () => (
  <Alert
    message={text('Texto', 'Alert todo correcto')}
    variant="success"
    onClose={() => action('Cerrar notificación')}
  />
);

AlertSuccess.story = {
  name: 'Correcta',
  parameters: { docs: { storyDescription: 'Alert para mostrar mensajes indicando mensajes positivos' } },
};

const AlertWarning = () => (
  <Alert
    message={text('Texto', 'Alert de advertencia')}
    variant="warning"
    onClose={() => action('Cerrar notificación')}
  />
);

AlertWarning.story = {
  name: 'Advertencia',
  parameters: { docs: { storyDescription: 'Alert para destacar un mensaje importante que el usuario debe leer' } },
};

const AlertError = () => (
  <Alert
    message={text('Texto', 'Alert de error')}
    variant="error"
    onClose={() => action('Cerrar notificación')}
  />
);

AlertError.story = {
  name: 'Error',
  parameters: { docs: { storyDescription: 'Alert para mostrar mensajes de error o advertencias críticas' } },
};

export {
  AlertDefault, AlertSuccess, AlertInfo, AlertError, AlertWarning,
};
