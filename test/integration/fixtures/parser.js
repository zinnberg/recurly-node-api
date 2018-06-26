const parser = require('xml2js-parser');

const typeChecker = require('js-type-checker');

const parserObj = new parser({
  explicitArray: false,
  ignoreAttrs : false,
  mergeAttrs : true,
  explicitRoot: false,
});

const Js2Xml = require("js2xml").Js2Xml;

const normalizeArrayResult = require('./../../../lib/normalize-array-result');

module.exports = {
  success(message){
    return normalizeArrayResult(parserObj.parseStringSync(message));
  },
  err(message){
    return parserObj.parseStringSync(message)
  },
  toXML(bodyRoot, message){
    return new Js2Xml(bodyRoot, message).toString();
  }
};
