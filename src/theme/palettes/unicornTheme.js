import { colors } from '@material-ui/core';
import { THEMES } from '../../constants';
import { strongShadows } from '../shadows';

export default {
  name: THEMES.UNICORN,
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
      default: '#2a2d3d',
      dark: '#222431',
      paper: '#2a2d3d',
    },
    primary: {
      main: '#a67dff',
    },
    secondary: {
      main: '#a67dff',
    },
    text: {
      primary: '#f6f5f8',
      secondary: '#9699a4',
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
