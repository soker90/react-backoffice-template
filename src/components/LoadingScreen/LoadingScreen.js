import React, { useEffect, memo } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress } from '@material-ui/core';
import { useStyles } from './LoadingScreen.styles';

/**
 * Se usa en el fallback de suspense, se muestra mientras se carga el js necesario
 */
const LoadingScreen = () => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
};

LoadingScreen.displayName = 'LoadingScreen';

export const story = LoadingScreen;
export default memo(LoadingScreen);
