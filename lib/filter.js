const {
  countParams,
  replaceParams,
  addQueryObject,
} = require('./utils');

const Js2Xml = require("js2xml").Js2Xml;

const data2xml = require('data2xml');

const convert = data2xml();

module.exports = function (options) {
  return {
    deleteFilter(args, endpoint){
      const {
        length,
      } = args;

      const [
        arg1,
      ] = args;

      let copy = endpoint.slice();

      if (length === 1) {
        copy = replaceParams(copy, arg1);
      }

      return {
        copy,
      }
    },
    getFilter(args, endpoint){
      const {
        length,
      } = args;

      const [
        arg1,
        arg2,
      ] = args;

      let copy = endpoint.slice();

      const paramCount = countParams(copy);

      if (length === 2) {
        copy = replaceParams(copy, arg1);
        copy = addQueryObject(copy, arg2);
      }

      if (length === 1 && paramCount === 0) {
        copy = addQueryObject(copy, arg1);
      }

      if (length === 1 && paramCount > 0) {
        copy = replaceParams(copy, arg1);
      }

      return {
        copy,
      }
    },
    postFilter(args, endpoint){
      const {
        bodyRoot,
      } = options;

      const {
        length,
      } = args;

      const [
        arg1,
        arg2,
      ] = args;

      let copy = endpoint.slice();

      let body;

      if (length === 0) {
        return {
          copy,
        };
      }

      if (length === 1) {
        body = arg1;
      }

      if (length === 2) {
        copy = replaceParams(copy, arg1);
        body = arg2;
      }

      const xmlBody = convert(bodyRoot, body).toString();

      return {
        copy,
        body: xmlBody,
      }
    },
    putFilter(args, endpoint, hasQuery){
      const {
        bodyRoot,
      } = options;

      const {
        length,
      } = args;

      const [
        arg1,
        arg2,
        arg3,
      ] = args;

      let copy = endpoint.slice();

      let body = null;

      const paramCount = countParams(copy);

      if (length === 1 && paramCount > 0) {
        copy = replaceParams(copy, arg1);
      }

      if (length === 1 && paramCount === 0) {
        body = convert(bodyRoot, arg1).toString();
      }

      if (length === 2 && hasQuery != null) {
        copy = replaceParams(copy, arg1);
        copy = addQueryObject(copy, arg2);
      }

      if (length === 2 && hasQuery == null) {
        copy = replaceParams(copy, arg1);
        body = convert(bodyRoot, arg2).toString();
      }

      return {
        copy,
        body,
      }
    },
  };
};
