const requestWrapper = require('./request-wrapper');

const {
  port,
  baseUrl,
} = require('./config.js');

module.exports = {
  createRequest(definition, body){
    const self = this;

    const {
      SUBDOMAIN,
      API_KEY,
    } = self.settings;

    const {
      endpoint,
      method,
    } = definition;

    const host = `${SUBDOMAIN}.${baseUrl}`;

    const options = {
      host,
      port,
      path: endpoint,
      method,
      headers: {
        Authorization: `Basic ${new Buffer(API_KEY).toString('base64')}`,
        Accept: 'application/xml',
        'Content-Length': (body) ? body.length : 0,
      },
    };

    if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
      options.headers['Content-Type'] = 'application/xml';
    }

    return requestWrapper(options, body);
  },
};
