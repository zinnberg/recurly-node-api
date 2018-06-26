const parser = require('./../../parser');

const reqJSON = {
  company_name: 'New Company Name',
};

module.exports = {
  reqJSON,
  xml: parser.toXML('account', reqJSON),
};
