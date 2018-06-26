const parser = require('./../../parser');

const reqJSON = {
  account_code: 'b6f5783',
  email: 'verena@example.com',
  first_name: 'verena',
  last_name: 'Example',
};

module.exports = {
  reqJSON,
  xml: parser.toXML('account', reqJSON),
};
