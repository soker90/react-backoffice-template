import React, { memo } from 'react';
import {
  Box,
  Container,
} from '@material-ui/core';
import { Header, Page } from 'components';
import { useStyles } from './DashboardView.styles';

/**
 * Actualmente solo muestra la cabecera de navegación y una imagen. En el futuro
 * mostrará una serie de datos
 * útiles para los usuarios y en caso de ser necesario gráficas de negocio.
 */
const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header title="React Backoffice Template" />

        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src="/static/images/analytics.svg"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default memo(DashboardView);
