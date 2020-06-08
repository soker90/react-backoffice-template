import React, { memo } from 'react';
import {
  Typography,
  Button, useTheme, useMediaQuery, Container, Box,
} from '@material-ui/core';

import { useStyles } from './NotAllowed.styles';
import Page from '../Page';

const NotAllowed = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root} title="Acceso denegado">
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary"
        >
          Acceso denegado
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Parece que no dispones del permiso requerido para acceder a esta
          sección. Si crees que se trata de un error, por favor, solicita
          acceso.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src="/static/images/error401.svg"
          />
        </Box>
      </Container>
    </Page>
  );
};

NotAllowed.displayName = 'NotAllowed';

export default memo(NotAllowed);
