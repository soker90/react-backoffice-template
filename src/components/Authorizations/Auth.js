import React, { useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'components/SplashScreen';
import { setUserData, logout } from 'actions/auth';
import authService from 'services/authService';

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    authService.setAxiosInterceptors({
      onLogout: () => dispatch(logout()),
    });

    if (authService.isAuthenticated()) {
      const callback = () => setLoading(false);
      dispatch(setUserData(callback));
    } else setLoading(false);
  }, [dispatch]);

  if (isLoading) return <SplashScreen />;

  return children;
};

Auth.propTypes = {
  children: PropTypes.any,
};

Auth.displayName = 'Auth';

export default memo(Auth);
