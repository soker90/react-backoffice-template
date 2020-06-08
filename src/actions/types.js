import { requestActions } from 'utils';

export const CHECK_CONNECTION = requestActions('CHECK_CONNECTION');

export const LOGOUT = '@account/logout';

export const LOGIN = requestActions('@account/login');
export const SILENT_LOGIN = requestActions('@account/silent-login');

/* MODALS */
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
