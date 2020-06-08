/**
 * Return if object is empty
 * @param {Object} object
 * @returns {boolean}
 */
export const isEmptyObject = object => Object.entries(object).length === 0;

/**
 * Convert elemento of a object to url query params
 * @param {Object} params
 * @return {string}
 */
export const objectToParams = params => {
  let str = '';

  /* eslint-disable no-restricted-syntax */
  for (const key in params) {
    if (params[key] && params[key] !== ' ') {
      const value = encodeURIComponent(params[key]);
      if (value) {
        if (str !== '') str += '&';
        str += `${key}=${value}`;
      }
    }
  }
  return str;
};
