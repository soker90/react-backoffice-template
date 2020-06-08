/* eslint-disable nonblock-statement-body-position */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import NotAllowed from '../NotAllowed';

const AuthRoute = ({ children, permission }) => {
  const account = useSelector(state => state.account);

  if (permission && !account.userPermissions.includes(permission))
    return <NotAllowed userRole={account.user.role} />;

  return children;
};

AuthRoute.propTypes = {
  children: PropTypes.any,
  permissions: PropTypes.string,
};

AuthRoute.displayName = 'AuthRoute';

export default memo(AuthRoute);
