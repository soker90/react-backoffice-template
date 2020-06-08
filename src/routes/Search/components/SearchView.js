import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';

import { Page, Header, HasPermission } from 'components';
import { USER_PERMISSIONS } from 'constants/permissions';
import SearchForm from './SearchForm';
import { useStyles } from './SearchView.styles';

const SearchView = ({ searchClients }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Buscar">
      <Container maxWidth={false} className={classes.container}>
        <Header
          routes={[{ link: '/app/customercare', title: 'Atención al cliente' }]}
          title="Buscar"
        />
        <Box mt={3}>
          <HasPermission access={USER_PERMISSIONS.SEARCH_CLIENTS}>
            <SearchForm searchClients={searchClients} />
          </HasPermission>
        </Box>
      </Container>
    </Page>
  );
};

SearchView.propTypes = {
  /**
   * Función de búsqueda de clientes
   */
  searchClients: PropTypes.func.isRequired,
};

SearchView.displayName = 'SearchView';

export const story = SearchView;
export default memo(SearchView);
