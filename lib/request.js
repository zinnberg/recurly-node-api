const requestWrapper = require('./request.wrapper');

const { port, baseUrl } = require('./config.js');

const requestModule = exports = module.exports = {};

requestModule.createRequest = function createRequest(definition, body){
    const self = this;

    const { endpoint, method } = definition;

    const host = `${self.settings.SUBDOMAIN}.${baseUrl}`;

    const options = {
        host,
        port,
        path: endpoint,
        method: method,
        headers: {
            Authorization: `Basic ${new Buffer(self.settings.API_KEY).toString('base64')}`,
            Accept: 'application/xml',
            'Content-Length': (body) ? body.length : 0,
        }
    };

    if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
        options.headers['Content-Type'] = 'application/xml';
    }

    return requestWrapper(options, body);
};


