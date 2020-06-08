import { LOGIN, LOGOUT, SILENT_LOGIN } from 'actions/types';
import { createReducer, setPayload } from 'store/utils';

const INITIAL_STATE = {
  user: null,
  loginError: null,
  userPermissions: [],
};

const ACTION_HANDLERS = {
  [LOGIN.REQUEST]: () => INITIAL_STATE,
  [LOGIN.SET]: setPayload,
  [LOGIN.FAILURE]: setPayload,
  [SILENT_LOGIN.SET]: setPayload,
  [LOGOUT]: () => INITIAL_STATE,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
