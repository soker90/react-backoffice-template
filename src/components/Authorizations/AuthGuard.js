import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthGuard = ({ children }) => {
  const account = useSelector(state => state.account);

  if (!account.user) return <Redirect to="/login" />;


  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.any,
};

AuthGuard.displayName = 'AuthGuard';

export default memo(AuthGuard);
