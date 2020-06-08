import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
  },
  default: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  success: {
    backgroundColor: colors.green[600],
    color: theme.palette.common.white,
  },
  info: {
    backgroundColor: colors.lightBlue[600],
    color: theme.palette.common.white,
  },
  warning: {
    backgroundColor: colors.orange[900],
    color: theme.palette.common.white,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  message: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8,
  },
}));
