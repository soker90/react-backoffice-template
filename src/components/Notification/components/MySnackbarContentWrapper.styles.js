import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.notification.success,
  },
  error: {
    backgroundColor: theme.palette.notification.error,
  },
  info: {
    backgroundColor: theme.palette.notification.info,
  },
  warning: {
    backgroundColor: theme.palette.notification.warning,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
}));
