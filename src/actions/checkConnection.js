// eslint-disable-next-line import/named
import { CHECK_CONNECTION } from 'actions/types';
import axios from 'axios';

/**
 * Return request action
 * @returns {{type: string}}
 * @private
 */
const _checkConnectionRequest = () => ({
  type: CHECK_CONNECTION.REQUEST,
});

/**
 * Return success action
 * @returns {{type: string}}
 * @private
 */
const _checkConnectionSuccess = () => ({
  type: CHECK_CONNECTION.SUCCESS,
});

/**
 * Return set action
 * @param {boolean} offline
 * @returns {{payload: {emailTemplates: *}, type: string}}
 * @private
 */
const _checkConnectionSet = offline => ({
  type: CHECK_CONNECTION.SET,
  payload: {
    offline,
  },
});

/**
 * Return failure action
 * @param {Object} error
 * @returns {{type: string, error: Object}}
 * @private
 */
const _checkConnectionError = error => ({
  type: CHECK_CONNECTION.FAILURE,
  error,
});

export const checkConnection = () => async dispatch => {
  dispatch(_checkConnectionRequest());

  try {
    const response = await axios('/monit/health');

    const offline = response?.data !== 'OK';
    dispatch(_checkConnectionSuccess());
    dispatch(_checkConnectionSet(offline));
  } catch (error) {
    console.error(error);
    dispatch(_checkConnectionSet(true));
    dispatch(_checkConnectionError(error));
  }
};
