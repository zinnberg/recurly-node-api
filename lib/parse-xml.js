const parser = require('xml2js-parser');

const typeChecker = require('js-type-checker');

const normalizeArrayResult = require('./normalize-array-result');

const parserObj = new parser({
  explicitArray: false,
  ignoreAttrs : false,
  mergeAttrs : true,
  explicitRoot: false,
});

module.exports = {
  success(message){
    const {
      response,
      headers,
      statusCode,
      hasResponse,
    } = message;

    if(hasResponse === false) {
      return Promise.resolve({
        headers,
        statusCode,
      });
    }

    return parserObj.parseString(response).then(result => {
      const parsedObj = {
        headers,
        statusCode,
        response: normalizeArrayResult(result),
      };

      return Promise.resolve(parsedObj);
    }).catch(err => {
      return Promise.reject({
        isRecurly: false,
        message: err,
      });
    });
  },
  err(message){
    if(!typeChecker.isObject(message)){
      return Promise.reject(message);
    }

    const {
      response,
      headers,
      statusCode,
      isRecurly,
    } = message;

    if(!isRecurly){
      return Promise.reject(message);
    }

    return parserObj.parseString(response).then(result => {
      const parsedObj = {
        headers,
        statusCode,
        response: result,
      };

      return Promise.reject(parsedObj);
    });
  },
};
