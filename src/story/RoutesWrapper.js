import React from 'react';
import PropTypes from 'prop-types';

import history from 'store/history';
import { Router } from 'react-router-dom';

/**
 * Wrapper for routes with storybook
 * @param children
 * @return {Router}
 * @constructor
 */

const RoutesWrapper = ({ children }) => (
  <Router history={history}>
    {children}
  </Router>
);

RoutesWrapper.displayName = 'RoutesWrapper';
RoutesWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default RoutesWrapper;
