import React from 'react';

import RoutesWrapper from 'story/RoutesWrapper';
import { USER_PERMISSION_LIST } from 'constants/permissions';
import { story as PermissionsView } from './PermissionsView';

export default {
  title: 'Rutas|Permisos',
  parameters: {
    component: PermissionsView,
    componentSubtitle: 'Panlla para visualizar los permisos del usuario',
  },
  decorators: [storyFn => <RoutesWrapper>{storyFn()}</RoutesWrapper>],
};

const Permissions = () => (
  <PermissionsView
    permissions={USER_PERMISSION_LIST}
    userRole="ADMIN"
  />
);

Permissions.story = {
  name: 'Permisos',
};

export { Permissions };
