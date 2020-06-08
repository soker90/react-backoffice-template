import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { story as LoginForm } from './LoginForm';

export default {
  title: 'Rutas|Login/Formulario',
  parameters: {
    component: LoginForm,
  },
};

const LoginFormStory = () => (
  <LoginForm
    login={action('Inicia sesión')}
    loginError={text('Mensaje de error', '', 'Componente')}
    isLoading={boolean('Iniciando sesión...', false, 'Componente')}
  />
);

LoginFormStory.story = {
  name: 'Formulario de login',
};

const LoginFormError = () => (
  <LoginForm
    login={action('Inicia sesión')}
    loginError="Usuario o contraseña incorrecta"
  />
);

LoginFormError.story = {
  name: 'Error',
  parameters: { docs: { storyDescription: 'Formulario con un error de inicio de sesión' } },
};


export { LoginFormStory, LoginFormError };
