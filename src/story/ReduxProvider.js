import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { select } from '@storybook/addon-knobs';

import { configureStore } from '../store';
import { USER_PERMISSIONS } from '../constants';

const permissions = {
  admin: [
    USER_PERMISSIONS.SEARCH_CLIENTS,
  ],
};

/**
 * Provider of redux for storybook
 * @param {Array | Object} children
 * @param {Object} state
 * @return {Provider}
 * @constructor
 */
const ReduxProvider = ({ state, children }) => {
  const role = select('Rol', Object.keys(permissions), 'admin', 'General');

  const store = configureStore({
    ...state,
    account: {
      user: {
        id: '5e86809283e28b96d2d38537',
        username: 'admin',
        password: 'admin',
        firstName: 'Usuario',
        lastName: 'Administrador',
        role: 'admin',
      },
      userPermissions: permissions[role],
    },
  });

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

ReduxProvider.propTypes = {
  state: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

ReduxProvider.defaultProps = {
  state: {},
};
ReduxProvider.displayName = 'ReduxProvider';

export default ReduxProvider;
