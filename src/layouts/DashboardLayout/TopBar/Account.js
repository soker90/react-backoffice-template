import React, {
  useRef,
  useState,
  memo,
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { logout } from 'actions/auth';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

const Account = () => {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.account.user);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await dispatch(logout());
      history.push('/');
      // eslint-disable-next-line no-empty
    } catch (error) {

    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
        data-cy="account-button"
      >
        <Avatar
          alt="User"
          className={classes.avatar}
          src={null}
        />
        <Hidden smDown>
          <Typography
            variant="h6"
            color="inherit"
          >
            {`${user.firstName}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem
          component={RouterLink}
          to="/app"
          disabled
        >
          Cuenta
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/app/settings/permissions"
          data-cy="menu-permissions"
        >
          Permisos
        </MenuItem>
        <MenuItem onClick={handleLogout} data-cy="menu-logout">
          Salir
        </MenuItem>
      </Menu>
    </>
  );
};

Account.displayName = 'Account';

export default memo(Account);
