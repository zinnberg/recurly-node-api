# Recurly API Node.js

## Installation:

```shell
$ npm install --save recurly-node-api

// Using Yarn

$ yarn add recurly-node-api
```


## API

Constructor Function That Takes an Options Argument

### `Recurly(options)`

Creates a new Recurly Instance

#### Arguments

- `options` - Required - A javascript object containing recurly configurations

#### Options

- `subdomain` - required - Your Recurly subdomain
- `apiKey` - required - Your Recurly apiKey
- `logging` - Optional - This Options allows you to turn on
logging for the Recurly API client. Defaults to false
- `logger` - Optional - This Option allows the recurly api to
output logs through a custom logger. Your logger must have
methods log and error. Defaults to console.

### Resources

Resources are accessed through a recurly instance

```js 
const recurly = require('recurly-node-api')({
    subdomain: 'test',
    apikey: '<your-api-key>',
});
```

All recurly resource methods return a promise

```js 
recurly.accounts.list().then(result => {

}).catch(err => {

});
```
### Resource Names and Methods
  
- accounts
  - `balance(account_code [, queryParams])`
  - `close(account_code)`
  - `create(bodyParams)`
  - `get(account_code)`
  - `notes(account_code [, queryParams])`
  - `list([queryParams])`
  - `reopen(account_code)`
  - `update(account_code [, bodyParams])`
- accountAcquisition
  - `create(account_code [, bodyParams])`
  - `get(account_code)`
  - `update(account_code [, bodyParams])`
  - `remove(account_code)`
- adjustments
  - `create(account_code, bodyParams)` 
  - `list(account_code [, queryParams])`
  - `remove(uuid)`
- automatedExports
  - `listExportDates()`
  - `listExportsByDate(date)`
  - `downloadExportsFile(pathParams)`
- billingInfo
  - `create(account_code, bodyParams)`
  - `get(account_code)`
  - `update(account_code [, bodyParams])`
  - `remove(account_code)`
- coupons
  - `create(bodyParams)`
  - `expire(coupon_code)`
  - `get(coupon_code)`
  - `generateUniqueCodes(coupon_code [, bodyParams])`
  - `list([queryParams])`
  - `listUniqueCouponCodes(coupon_code [, queryParams])`
  - `restoreCoupon(coupon_code [, bodyParams])`
  - `update(coupon_code [, bodyParams])`
- couponRedemption
  - `get(pathParams)`
  - `listAccountCouponRedemptions(account_code [, queryParams])`
  - `listInvoicesCouponRedemptions(invoice_number, [, queryParams])`
  - `listSubscriptionsCouponRedemptions(uuid, [, queryParams])`
  - `redeem(pathParams. bodyParams)`
  - `remove(pathParams)`
- creditPayments
  - `get(uuid)`
  - `list([queryParams])`
  - `listByAccount(account_code [, queryParams])`
- giftCards
  - `create(bodyParams)`
  - `createSubscriptionWithGiftCard(bodyParams)`
  - `get(id)`
  - `list([queryParams])`
  - `previewGiftCard(bodyParams)`
  - `previewSubcriptionWithGiftCard(bodyParams)`
  - `redeem(redemption_code, bodyParams)`
- invoices
  - `collect(invoice_number)`
  - `create(account_code [, bodyParams])`
  - `enterOfflinePayment(invoice_number [, bodyParams])`
  - `get(invoice_number)`
  - `list(queryParams)`
  - `listByAccount(account_code [, queryParams)`
  - `markFailed(invoice_number)`
  - `markPaid(invoice_number)`
  - `preview(account_code [, bodyParams])`
  - `refundLineItems(invoice_number, bodyParams)`
  - `refundOpenAmount(invoice_number, bodyParams)`
  - `voidCreditInvoice(account_code)`
- measuredUnits
  - `create(bodyParams)`
  - `get(measured_unit_id)`
  - `list()`
  - `remove(measured_units_id)`
  - `update(measured_unit_id [, bodyParams])`
- plans
  - `create(bodyParams)`
  - `get(plan_code)`
  - `list([queryParams])`
  - `remove(plan_code)`
  - `update(plan_code, [, bodyParams])`
- planAddons
  - `create(plan_code [, bodyParams])`
  - `get(pathParams)`
  - `list(plan_code [, queryParams])`
  - `remove(pathParams)`
  - `update(pathParams [, bodyParams])`
- shippingAddresses 
  - `create(account_code, bodyParams)`
  - `list(account_code [, queryParams])`
  - `remove(pathParams)`
  - `update(pathParams [, bodyParams])`
- subscriptions
  - `cancel(uuid)`
  - `create(bodyParams)`
  - `get(uuid)`
  - `list([queryParams])`
  - `listByAccount(account_code [, queryParams])`
  - `postpone(uuid, queryParams)`
  - `pause(uuid, bodyParams)`
  - `preview(bodyParams)`
  - `previewSubscriptionChange(uuid, bodyParams)`
  - `reactivate(uuid)`
  - `resume(uuid)`
  - `terminate(uuid, queryParams)`
  - `update(uuid, queryParams)`
  - `updateNotes(uuid [, bodyParams])`
- transactions
  - `create(bodyParams)`
  - `get(uuid)`
  - `list([queryParams])`
  - `listByAccount(account_code [, queryParams])`
  - `refund(uuid [, bodyParams])`
- usage
  - `get(pathParams)`
  - `list(pathParams [, queryParams])`
  - `log(pathParams, bodyParams)`
  - `update(pathParams [, bodyParams])`
  - `remove(pathParams)`
