import { setPayload, createReducer } from 'store/utils';
import {
  CHECK_CONNECTION,
} from 'actions/types';

const INITIAL_STATE = {
  offline: false,
};

const ACTION_HANLDERS = {
  [CHECK_CONNECTION.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANLDERS);
