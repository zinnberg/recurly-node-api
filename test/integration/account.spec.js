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

describe('Account', function(){
  afterEach(() => expect(scope.isDone()).to.be.true);
  it('Gets a List of accounts', function(){
    const {
      list: {
        response,
        parsedResponse,
      },
    } = res;

    scope.get('/v2/accounts')
      .reply(200, response);

    return recurly.accounts.list()
      .then(data => expect(data.response).to.deep.equal(parsedResponse));
  });

  it('Gets The Correct Accounts', function(){
    const {
      get:{
        response,
        parsedResponse,
      },
    } = res;

    scope.get('/v2/accounts/1')
      .reply(200, response);

    return recurly.accounts.get('1')
      .then(data => expect(data.response).to.deep.equal(parsedResponse));

  });

  it('Creates an Account', function(){
    const {
      create:{
        response,
        parsedResponse,
      },
    } = res;

    const {
      create:{
        reqJSON,
        xml,
      },
    } = req;

    scope.post('/v2/accounts', xml)
      .reply(201, response);

    return recurly.accounts.create(reqJSON).then(data => expect(data.response).to.deep.equal(parsedResponse));
  });

  it('Updates an Account', function(){
    const {
      updateAccount:{
        response,
        parsedResponse,
      },
    } = res;

    const {
      updateAccount:{
        reqJSON,
        xml,
      },
    } = req;

    scope.put('/v2/accounts/b6f5783', xml)
      .reply(200, response);

    return recurly.accounts.update('b6f5783', reqJSON).then(({response}) => expect(response).to.deep.equal(parsedResponse));

  });

  it('Closes an Account', function(){
    scope.delete('/v2/accounts/b6f5783')
      .reply(204);

    return recurly.accounts.close('b6f5783').then(({statusCode}) => expect(statusCode).to.equal(204));
  });

  it('Reopens an Account', function(){
    const {
      get:{
        response,
        parsedResponse,
      },
    } = res;

    scope.put('/v2/accounts/b6f5783/reopen')
      .reply(200, response);

    return recurly.accounts.reopen('b6f5783').then(({response}) => expect(response).to.deep.equal(parsedResponse));
  });

  it('Gets Account Notes', function(){
    const {
      notes: {
        response,
        parsedResponse,
      },
    } = res;
    scope.get('/v2/accounts/b6f5783/notes')
      .reply(200, response);

    return recurly.accounts.notes('b6f5783').then(({response}) => expect(response).to.deep.equal(parsedResponse));
  });

  it('Gets Account Balance', function(){
    const {
      balance: {
        response,
        parsedResponse,
      },
    } = res;
    scope.get('/v2/accounts/b6f5783/balance')
      .reply(200, response);

    return recurly.accounts.balance('b6f5783').then(({response}) => expect(response).to.deep.equal(parsedResponse));
  });
});
