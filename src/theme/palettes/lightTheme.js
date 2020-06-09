import { colors } from '@material-ui/core';
import { THEMES } from '../../constants';
import { softShadows } from '../shadows';

export default {
  name: THEMES.LIGHT,
  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
  },
  palette: {
    type: 'light',
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[600],
    },
    secondary: {
      main: '#5850EC',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
    notification: {
      success: colors.green[600],
      error: colors.red[900],
      warning: colors.amber[700],
      info: colors.blue[500],
    },
  },
  shadows: softShadows,
};
