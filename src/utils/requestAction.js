/**
 * Generate 4 string for actions
 * @param {String} actionName
 * @return {{SUCCESS: string, SET: string, REQUEST: string, FAILURE: string}}
 */
export const requestActions = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
  SET: `${actionName}_SET`,
});
