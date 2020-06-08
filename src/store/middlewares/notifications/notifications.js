import { SEARCH_CLIENTS } from 'routes/Search/modules/types';

const setPayload = payload => {
  if (!payload?.level) return;

  // eslint-disable-next-line consistent-return
  return payload;
};

// Mandatory payload.level
const notifications = {
  [SEARCH_CLIENTS.SUCCESS]: setPayload,
};

export default notifications;
