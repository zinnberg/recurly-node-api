const method = require('./method.js');

const mixin = require('merge-descriptors');

const request = require('./request.js');

const _ = require('lodash');

function Resource(recurly, methodDefinitions) {
  if (!(this instanceof Resource)) return new Resource(recurly, methodDefinitions);
  const self = this;

  self.settings = recurly;

  mixin(self, recurly);

  mixin(self, request);

  const {
    routeOptions,
  } = methodDefinitions;

  const routes = _.omit(methodDefinitions, ['routeOptions']);
  Object.keys(routes).forEach(def => {
    mixin(self, method(methodDefinitions[def], def, routeOptions));
  });
}

module.exports = Resource;
