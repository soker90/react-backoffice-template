import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import Logo from 'components/Logo';
import Account from './Account';
import Search from './Search';
import Settings from './Settings';
import { useStyles } from './TopBar.styles';

const TopBar = (
  {
    className,
    onMobileNavOpen,
    ...rest
  }
) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      data-cy="topbar"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <DashboardOutlinedIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <Logo
              height="34rem"
              width="150rem"
            />
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Search />
        <Settings />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

TopBar.displayName = 'TopBar';

export default memo(TopBar);
