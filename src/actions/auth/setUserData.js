import authService from 'services/authService';
import { SILENT_LOGIN } from 'actions/types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _setUserDataRequest = () => ({
  type: SILENT_LOGIN.REQUEST,
});

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _setUserDataSuccess = () => ({
  type: SILENT_LOGIN.SUCCESS,
});

/**
 * Failure action
 * @param error
 * @returns {{type: string, error: Object}}
 * @private
 */
const _setUserDataError = error => ({
  type: SILENT_LOGIN.FAILURE,
  error,
});

/**
 * Set action
 * @param {Object} user
 * @param {Array} permissions
 * @returns {{payload: {user: Object}, type: string}}
 * @private
 */
const _setUserDataSet = ({ user, permissions }) => ({
  type: SILENT_LOGIN.SET,
  payload: {
    user,
    userPermissions: permissions,
  },
});

/**
 * LayoutLogin in the system
 * @returns {function(...[*]=)}
 */
export const setUserData = callback => async dispatch => {
  try {
    dispatch(_setUserDataRequest());

    const userData = await authService.loginInWithToken();

    dispatch(_setUserDataSuccess());
    dispatch(_setUserDataSet(userData));
    // eslint-disable-next-line
    callback?.();
  } catch (error) {
    console.error(error);
    dispatch(_setUserDataError(error));
    // eslint-disable-next-line
    callback?.();
  }
};
