import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import RoutesWrapper from 'story/RoutesWrapper';
import DashboardView from './DashboardView';

export default {
  title: 'Rutas|Inicio',
  parameters: {
    component: DashboardView,
    componentSubtitle: 'Vista del dashboard de inicio',
  },
  decorators: [withKnobs],
};

const Dashboard = () => (
  <RoutesWrapper>
    <DashboardView />
  </RoutesWrapper>
);

Dashboard.story = {
  name: 'Inicio',
};

export { Dashboard };
