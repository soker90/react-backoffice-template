import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import notifications from './notifications';
import modal from './modal';

import account from './account';
import common from './common';

const rootReducer = combineReducers({
  loadingBar,
  account,
  common,
  /* System reducers */
  notifications,
  modal,
});

export default rootReducer;
