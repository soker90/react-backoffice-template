import React from 'react';

import { story as SplashScreen } from './SplashScreen';

export default {
  title: 'Componentes|Animaciones de carga/Spinner',
  parameters: {
    component: SplashScreen,
  },
};

const Splash = () => <SplashScreen />;

Splash.story = {
  name: 'Spinner',
};

export { Splash };
