import makeStyles from '@material-ui/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  iconActive: {
    color: theme.palette.notification.success,
  },
  iconInactive: {
    color: theme.palette.notification.error,
  },
}));
