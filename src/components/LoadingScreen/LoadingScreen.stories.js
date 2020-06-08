import React from 'react';

import { story as LoadingScreen } from './LoadingScreen';

export default {
  title: 'Componentes|Animaciones de carga/Barra',
  parameters: {
    component: LoadingScreen,
  },
};

const Loading = () => <LoadingScreen />;

Loading.story = {
  name: 'Barra de carga',
};

export { Loading };
