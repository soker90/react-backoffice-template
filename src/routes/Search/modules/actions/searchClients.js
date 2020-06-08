import axios from 'axios';
import { objectToParams, navigateTo } from 'utils';

import { SEARCH_CLIENTS } from '../types';

const handleSearchClientsResponse = clients => {
  if (clients?.length > 0) navigateTo(`customercare/client/${clients[0].userId}`);
};

const searchClientsRequest = () => ({
  type: SEARCH_CLIENTS.REQUEST,
});

/**
 *
 * @param {Number} countNotifications
 * @return {{type: string}}
 */
const searchClientsSuccess = countNotifications => ({
  type: SEARCH_CLIENTS.SUCCESS,
  ...(!countNotifications && {
    payload: {
      level: 'info',
      message: 'No se han encontrado coincidencias.',
    },
  }),
});

const searchClientsError = error => ({
  type: SEARCH_CLIENTS.FAILURE,
  error,
});

/**
 * Busca los cliente que coindicen con los parametros dados
 * @param {Object} formData
 * @return {function(...[*]=)}
 */
export const searchClients = formData => async dispatch => {
  try {
    const query = objectToParams(formData);
    if (query) {
      dispatch(searchClientsRequest());
      // const URL = `search?${query}`;
      const URL = 'search'; // TODO: For mock
      const { data } = await axios(URL);

      dispatch(searchClientsSuccess(data.length));

      if (data) handleSearchClientsResponse(data);
    }
  } catch (error) {
    console.error(error);
    dispatch(searchClientsError(error));
  }
};
