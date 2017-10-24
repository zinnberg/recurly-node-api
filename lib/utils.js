const hasOwn = {}.hasOwnProperty;

const toString = {}.toString;

const utils = exports = module.exports = {};

utils.isObject = (test) => {
    return toString.call(test) === '[object Object]';
};

utils.isString = (test) => {
    return toString.call(test) === '[object String]';
};

utils.countParams = (route) => {
    const result = route.match(/(:[^\/]+)/g);

    return result != null ? result.length : 0;
};

utils.replaceParams = (route, replacements) => {
    const copy = route.slice();

    const { countParams, isString } = utils;

    if (countParams(route) === 1 && isString(replacements)) {
        return copy.replace(/(:[^\/]+)/g, replacements);
    }

    return copy.replace(/(:[^\/]+)/g, (name) => {
        const key = name.substr(1);

        return replacements[key];
    });
};

utils.buildQueryString = (queryObject) => {
    return Object
        .keys(queryObject)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
        .join('&');
};

utils.addQueryObject = (route, queryObject) => {
    const copy = route.slice();

    const { buildQueryString } = utils;

    return `${copy}?${buildQueryString(queryObject)}`;
};
