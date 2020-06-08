import authService from 'services/authService';
import { LOGIN } from 'actions/types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _loginRequest = () => ({
  type: LOGIN.REQUEST,
});

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _loginSuccess = () => ({
  type: LOGIN.SUCCESS,
});

/**
 * Failure action
 * @param error
 * @returns {{type: string, error: Object}}
 * @private
 */
const _loginError = error => ({
  type: LOGIN.FAILURE,
  error: {}, // Para que no aparezca la notificación en bocadillo
  payload: {
    loginError: error?.response?.data?.message,
  },
});

/**
 * Set action
 * @param {Object} user
 * @param {Array} permissions
 * @returns {{payload: {user: Object}, type: string}}
 * @private
 */
const _loginSet = ({ user, permissions }) => ({
  type: LOGIN.SET,
  payload: {
    user,
    userPermissions: permissions,
  },
});

/**
 * LayoutLogin in the system
 * @param {string} username
 * @param {string} password
 * @returns {function(...[*]=)}
 */
export const login = (username, password) => async dispatch => {
  try {
    dispatch(_loginRequest());

    const auth = await authService.loginWithUsernameAndPassword(username, password);

    dispatch(_loginSuccess());
    dispatch(_loginSet(auth));
  } catch (error) {
    console.error(error);
    dispatch(_loginError(error));
  }
};
