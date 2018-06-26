
module.exports = {
  res: {
    list: require('./res/list'),
    get: require('./res/get'),
    create: require('./res/create'),
    updateAccount: require('./res/update-account'),
    notes: require('./res/notes'),
    balance: require('./res/balance'),
  },
  req: {
    create: require('./req/create'),
    updateAccount: require('./req/update-account'),
  },
};
