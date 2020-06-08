import createReducer from 'redux/create-reducer';
import { setPayload } from 'redux/setPayload';
import { SEARCH_CLIENTS } from './types';

const INITIAL_STATE = {
  clients: [],
};

const ACTION_HANDLERS = {
  [SEARCH_CLIENTS.REQUEST]: () => INITIAL_STATE,
  [SEARCH_CLIENTS.SUCCESS]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
