const nock = require('nock');

const Recurly = require('./..');

const subdomain = 'sample_saas_company';

const apiKey = 'apcdedagagaggagq';

const recurly = Recurly({
  subdomain,
  apiKey,
});

const scope = nock(`https://${subdomain}.recurly.com`, {
  reqheaders: {
    Accept: 'application/xml',
    Authorization: `Basic ${new Buffer(apiKey).toString('base64')}`,
  },
});

module.exports = {
  scope,
  recurly,
  apiKey,
  subdomain,
};
