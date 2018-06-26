const {
  scope,
  recurly
} = require('./../common');

const {
  res,
  req,
} = require('./fixtures/account');

const {
  expect,
} = require('chai');

describe('Adjustment', function(){
  afterEach(() => expect(scope.isDone()).to.be.true);
});
