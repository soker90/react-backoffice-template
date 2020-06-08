import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { select } from '@storybook/addon-knobs';
import PropTypes from 'prop-types';

import { createTheme } from 'theme';
import { THEMES } from '../constants';

/**
 * Theme wrapper for storybook
 * @param children
 * @param {string} theme
 * @return {ThemeProvider}
 * @constructor
 */

const ThemeWrapper = ({ children }) => {
  const theme = select(
    'Tema',
    Object.keys(THEMES),
    THEMES.LIGHT,
    'General',
  );

  return (
    <ThemeProvider theme={createTheme({ theme })}>
      {children}
    </ThemeProvider>
  );
};

ThemeWrapper.displayName = 'ThemeWrapper';

ThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ThemeWrapper;
