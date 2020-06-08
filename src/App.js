import React, { memo, useMemo } from 'react';
import { Router } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// eslint-disable-next-line import/no-extraneous-dependencies
import LoadingBar from 'react-redux-loading-bar';

import history from 'store/history';
import { Auth, ModalRoot, NotNetwork } from 'components';
import ScrollReset from 'components/ScrollReset';
import { createTheme } from 'theme';
import Routes from 'Routes';
import useSettings from 'hooks/useSettings';
import Notification from './components/Notification';
import { useStyles } from './App.styles';
import useIsDisconnected from './hooks/useIsDisconnected';

const App = () => {
  useStyles();
  const { settings } = useSettings();
  const theme = useMemo(() => createTheme(settings), [settings]);

  /* Check connection */
  const offline = useIsDisconnected();

  if (offline) {
    return (
      <ThemeProvider theme={theme}>
        <NotNetwork />
      </ThemeProvider>
    );
  }


  /** *** */

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router history={history}>
          <LoadingBar
            style={{
              zIndex: 999999,
              backgroundColor: theme.palette.secondary.main,
              height: '5px',
            }}
          />
          <Notification />
          <Auth>
            <>
              <ScrollReset />
              <Routes />
              <ModalRoot />
            </>
          </Auth>
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

App.displayName = 'App';

export default memo(App);
