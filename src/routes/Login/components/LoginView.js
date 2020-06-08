import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, LinearProgress,
  Typography,
} from '@material-ui/core';
import AuthLayout from 'layouts/AuthLayout';
import { randomQuote } from 'utils/randomQuote';
import LoginForm from './LoginForm';
import { useStyles } from './Login.styles';
import NotNetwork from '../../../components/NotNetwork';

const LoginView = ({
  login, loginError, isLoading, offline,
}) => {
  const classes = useStyles();
  const quote = randomQuote();

  /**
   * Render loading bar
   * @returns {boolean || LinearProgress}
   */
  const renderLoadingBar = () => isLoading && <LinearProgress />;

  if (offline) return <NotNetwork />;

  return (
    <AuthLayout>
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteContainer}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  {quote.phrase}
                </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                    {quote.author}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <LoginForm login={login} loginError={loginError} isLoading={isLoading} />
              </div>
              {renderLoadingBar()}
            </div>
          </Grid>
        </Grid>
      </div>
    </AuthLayout>
  );
};

LoginView.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  offline: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

LoginView.displayName = 'LoginView';

export default memo(LoginView);
