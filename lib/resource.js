const method = require('./method.js');

const mixin = require('merge-descriptors');

const request = require('./request.js');

function Resource(recurly, methodDefinitions){
    if(!(this instanceof Resource)) return new Resource(recurly, methodDefinitions);

    let self = this;

    self.settings = recurly;

    mixin(self, recurly);
    mixin(self, request);

    Object.keys(methodDefinitions).forEach((def) => {
        mixin(self, method(methodDefinitions[def], def));
    });
}

exports = module.exports = Resource;
