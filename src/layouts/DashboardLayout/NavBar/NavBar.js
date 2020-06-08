/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect, memo } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
} from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import uniqueId from 'uniqid';

import Logo from 'components/Logo';
import NavItem from './NavItem';
import { navConfig } from './NavigationConfig';
import { useStyles } from './NavBar.styles';

const NavBar = ({ openMobile, onMobileClose }) => {
  const classes = useStyles();
  const location = useLocation();
  const { user, userPermissions } = useSelector(state => state.account);

  const renderNavItems = ({ items, ...rest }) => (
    <List disablePadding>
      {items.filter(({ permission }) => (
        userPermissions.includes(permission) || permission === undefined))
        .reduce(
          (acc, item) => reduceChildRoutes({
            acc,
            item,
            ...rest,
          }),
          []
        )}
    </List>
  );

  const reduceChildRoutes = (
    {
      acc,
      pathname,
      item,
      depth = 0,
    }
  ) => {
    const key = item.title + depth;

    if (item.items) {
      const open = matchPath(pathname, {
        path: item.href,
        exact: false,
      });

      const renderItems = renderNavItems({
        depth: depth + 1,
        pathname,
        items: item.items,
      });

      // Remove root nav if no have childrens
      if (renderItems.props.children.length === 0) return acc;

      acc.push(
        <NavItem
          depth={depth}
          icon={item.icon}
          key={key}
          info={item.info}
          open={Boolean(open)}
          title={item.title}
        >
          {renderItems}
        </NavItem>
      );
    } else {
      acc.push(
        <NavItem
          depth={depth}
          href={item.href}
          icon={item.icon}
          key={key}
          info={item.info}
          title={item.title}
        />
      );
    }

    return acc;
  };

  useEffect(() => {
    if (openMobile && onMobileClose) onMobileClose();

    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="/">
              <Logo
                height="44rem"
                width="200rem"
              />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="/app/account">
              <Avatar
                alt="User"
                className={classes.avatar}
                src={null}
              />
            </RouterLink>
          </Box>
          <Box
            mt={2}
            textAlign="center"
          >
            <Link
              component={RouterLink}
              to="/app/account"
              variant="h5"
              color="textPrimary"
              underline="none"
            >
              {`${user.firstName} ${user.lastName}`}
            </Link>
            <Typography
              variant="body1"
              color="textSecondary"
            >
              {user.role}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {navConfig.map(config => (
            <List
              key={uniqueId()}
              subheader={(
                <ListSubheader
                  disableGutters
                  disableSticky
                >
                  {config.subheader}
                </ListSubheader>
              )}
            >
              {renderNavItems({
                items: config.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.displayName = 'NavBar';

export default memo(NavBar);
