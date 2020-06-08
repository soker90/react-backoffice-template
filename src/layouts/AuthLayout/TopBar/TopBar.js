import React, { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

import { useStyles } from './TopBar.styles';

const TopBar = ({ className }) => {
  const classes = useStyles();
  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <img
          alt="Logo"
          src="/static/logo.png"
          height="34rem"
          width="150rem"
        />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

TopBar.displayName = 'TopBar';

export default memo(TopBar);
