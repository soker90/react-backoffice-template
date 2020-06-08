import { colors } from '@material-ui/core';
import { THEMES } from 'constants/common';
import { strongShadows } from '../shadows';

export default {
  name: THEMES.ONE_DARK,
  palette: {
    type: 'dark',
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)',
    },
    background: {
      default: '#282C34',
      dark: '#1c2025',
      paper: '#282C34',
    },
    primary: {
      main: '#8a85ff',
    },
    secondary: {
      main: '#8a85ff',
    },
    text: {
      primary: '#e6e5e8',
      secondary: '#adb0bb',
    },
    notification: {
      success: colors.green[600],
      error: colors.red[900],
      warning: colors.amber[700],
      info: colors.blue[500],
    },
  },
  shadows: strongShadows,
};
