const hasOwn = {}.hasOwnProperty;

const typeChecker = require('js-type-checker');

const _ = require('lodash');

function normalizeArrayResult(result){
  if(hasOwn.call(result, 'type') && result.type === 'array'){
    const {
      type,
    } = result;

    const rest = _.omit(result, [
      'type',
    ]);

    const returnObj = {
      type: 'array',
    };

    Object.keys(rest).forEach(prop => {
      if(typeChecker.isObject(result[prop])){
        returnObj[prop] = [];
        returnObj[prop].push(result[prop]);
      } else {
        returnObj[prop] = result[prop]
      }
    });

    return returnObj;
  }

  return result;
}

module.exports = normalizeArrayResult;
