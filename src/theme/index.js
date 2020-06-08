/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import { themeConfigs } from './themeConfigs';

const baseConfig = {
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)',
      },
    },
  },
};

export const createTheme = (settings = {}) => {
  let themeConfig = themeConfigs.find(themeFilter => themeFilter.name === settings.theme);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${settings.theme} is not valid`));
    [themeConfig] = themeConfigs;
  }

  return createMuiTheme({
    ...baseConfig,
    ...themeConfig,
  });
};
