const Resource = require('./resource.js');

const _ = require('lodash');

Recurly.endpoints = require('./endpoints');

function Recurly(options){
    if (!(this instanceof Recurly)) {
        return new Recurly(options);
    }

    this.settings = {
        SUBDOMAIN: options.subdomain,
        API_KEY: options.apiKey,
        LOGGING: options.logging || false,
        LOGGER: options.logger  || console,
    };

    this.init();
}

Recurly.prototype = {
    init(){
        let self = this;

        const { endpoints } =  Recurly;

        const { settings } = this;

        Object.keys(endpoints).forEach((endpoint) => {
            self[endpoint] = new Resource(settings, endpoints[endpoint]);
        });
    },
};

exports = module.exports = Recurly;
