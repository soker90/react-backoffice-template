import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './MySnackbarContentWrapper';
import { useStyles } from './Notification.styles';

const Notification = ({ notification }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (notification.message) setOpen(true);
  }, [notification.message]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;


    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000 || notification.autoDismiss}
      onClose={handleClose}
      className={classes.root}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={notification.level || 'success'}
        message={notification.message}
      />
    </Snackbar>
  );
};

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
};

Notification.displayName = 'Notification';

export default memo(Notification);
