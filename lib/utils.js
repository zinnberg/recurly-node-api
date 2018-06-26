const hasOwn = {}.hasOwnProperty;

const typeChecker = require('js-type-checker');

const utils = {
  countParams(route){
    const result = route.match(/(:[^\/]+)/g);

    return result != null ? result.length : 0;
  },
  replaceParams(route, replacements){
    const copy = route.slice();

    const {
      countParams,
      isString,
    } = utils;

    if (countParams(route) === 1 && typeChecker.isString(replacements)) {
      return copy.replace(/(:[^\/]+)/g, replacements);
    }

    return copy.replace(/(:[^\/]+)/g, name => {
      const key = name.substr(1);

      return replacements[key];
    });
  },
  buildQueryString(queryObject){
    return Object
      .keys(queryObject)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
      .join('&');
  },
  addQueryObject(route, queryObject){
    const copy = route.slice();

    const {
      buildQueryString,
    } = utils;

    return `${copy}?${buildQueryString(queryObject)}`;
  },
};

module.exports = utils;
