const {
  GET,
  POST,
  DELETE,
  PUT,
} = require('./../constants/methods');

const accounts = {
  balance: {
    endpoint: '/v2/accounts/:account_code/balance',
    method: GET,
  },
  close: {
    endpoint: '/v2/accounts/:account_code',
    method: DELETE,
  },
  create: {
    endpoint: '/v2/accounts',
    method: POST,
  },
  get: {
    endpoint: '/v2/accounts/:account_code',
    method: GET,
  },
  list: {
    endpoint: '/v2/accounts',
    method: GET,
  },
  notes: {
    endpoint: '/v2/accounts/:account_code/notes',
    method: GET,
  },
  reopen: {
    endpoint: '/v2/accounts/:account_code/reopen',
    method: PUT,
  },
  update: {
    endpoint: '/v2/accounts/:account_code',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'account',
  },
};

const accountAcquisition = {
  create: {
    endpoint: '/v2/accounts/:account_code/acquisition',
    method: POST,
  },
  get: {
    endpoint: '/v2/accounts/:account_code/acquisition',
    method: POST,
  },
  remove: {
    endpoint: '/v2/accounts/:account_code/acquisition',
    method: DELETE,
  },
  update: {
    endpoint: '/v2/accounts/:account_code/acquisition',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'account_acquisition',
  },
};

const adjustments = {
  create: {
    endpoint: '/v2/accounts/:account_code/adjustments',
    method: POST,
  },
  list: {
    endpoint: '/v2/accounts/:account_code/adjustments',
    method: GET,
  },
  remove: {
    endpoint: '/v2/adjustments/:uuid',
    method: DELETE,
  },
  routeOptions: {
    bodyRoot: 'adjustment',
  },
};

const automatedExports = {
  listExportDates: {
    endpoint: '/v2/export_dates',
    method: GET,
  },
  listExportsByDate: {
    endpoint: '/v2/export_dates/:date/export_files',
    method: GET,
  },
  downloadExportsFile: {
    endpoint: '/v2/export_dates/:date/export_files/:file_name',
    method: GET,
  },
};

const billingInfo = {
  create: {
    endpoint: '/v2/accounts/:account_code/billing_info',
    method: POST,
  },
  get: {
    endpoint: '/v2/accounts/:account_code/billing_info',
    method: GET,
  },
  remove: {
    endpoint: '/v2/accounts/:account_code/billing_info',
    method: DELETE,
  },
  update: {
    endpoint: '/v2/accounts/:account_code/billing_info',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'billing_info',
  },
};

const coupons = {
  create: {
    endpoint: '/v2/coupons',
    method: POST,
  },
  expire: {
    endpoint: '/v2/coupons/:coupon_code',
    method: DELETE,
  },
  get: {
    endpoint: '/v2/coupons/:coupon_code',
    method: GET,
  },
  generateUniqueCodes: {
    endpoint: '/v2/coupons/:coupon_code/generate',
    method: POST,
  },
  list: {
    endpoint: '/v2/coupons',
    method: GET,
  },
  listUniqueCouponCodes: {
    endpoint: '/v2/coupons/:coupon_code/unique_coupon_codes',
    method: GET,
  },
  restoreCoupon: {
    endpoint: '/v2/coupons/:coupon_code/restore',
    method: PUT,
  },
  update: {
    endpoint: '/v2/coupons/:coupon_code',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'coupon',
  },
};

const couponRedemption = {
  get: {
    endpoint: '/v2/accounts/:account_code/redemption/:redemption_uuid',
    method: GET,
  },
  listAccountCouponRedemptions: {
    endpoint: '/v2/invoices/:account_code/redemptions',
    method: GET,
  },
  listInvoicesCouponRedemptions: {
    endpoint: '/v2/invoices/:invoice_number/redemptions',
    method: GET,
  },
  listSubscriptionsCouponRedemptions: {
    endpoint: '/subscriptions/:uuid/redemptions',
    method: GET,
  },
  redeem: {
    endpoint: '/v2/coupons/:coupon_code/redeem/:coupon_code',
    method: POST,
  },
  remove: {
    endpoint: '/v2/accounts/:account_code/redemption',
    method: DELETE,
  },
  routeOptions: {
    bodyRoot: 'redemption',
  },
};

const creditPayments = {
  get: {
    endpoint: '/v2/credit_payments/:uuid',
    method: GET,
  },
  list: {
    endpoint: '/v2/credit_payments',
    method: GET,
  },
  listByAccount: {
    endpoint: '/v2/accounts/:account_code/credit_payments',
    method: GET,
  },
};

const giftCards = {
  create: {
    endpoint: '/v2/gift_cards',
    method: POST,
  },
  createSubscriptionWithGiftCard: {
    endpoint: '/v2/subscriptions',
    method: POST,
  },
  get: {
    endpoint: '/v2/gift_cards/:id',
    method: GET,
  },
  list: {
    endpoint: '/v2/gift_cards',
    method: GET,
  },
  previewGiftCard: {
    endpoint: '/v2/gift_cards/preview',
    method: POST,
  },
  previewSubcriptionWithGiftCard: {
    endpoint: '/v2/subscriptions/preview',
    method: POST,
  },
  redeem: {
    endpoint: '/v2/gift_cards/:redemption_code/redeem',
    method: POST,
  }
};

const invoices = {
  collect: {
    endpoint: '/v2/invoices/:invoice_number/collect',
    method: PUT,
  },
  create: {
    endpoint: '/v2/accounts/:account_code/invoices',
    method: POST,
  },
  enterOfflinePayment: {
    endpoint: '/v2/invoices/:invoice_number/transactions',
    method: POST,
  },
  get: {
    endpoint: '/v2/invoices/:invoice_number',
    method: GET,
  },
  list: {
    endpoint: '/v2/invoices',
    method: GET,
  },
  listByAccount: {
    endpoint: '/v2/accounts/:account_code/invoices',
    method: GET,
  },
  markFailed: {
    endpoint: '/v2/invoices/:invoice_number/mark_failed',
    method: PUT,
  },
  markPaid: {
    endpoint: '/v2/invoices/:invoice_number/mark_successful',
    method: PUT,
  },
  preview: {
    endpoint: '/v2/accounts/:account_code/invoices/preview',
    method: POST,
  },
  refundLineItems: {
    endpoint: '/v2/invoices/:invoice_number/refund',
    method: POST,
  },
  refundOpenAmount: {
    endpoint: '/v2/invoices/:invoice_number/refund',
    method: POST,
  },
  voidCreditInvoice: {
    endpoint: '/v2/invoices/:invoice_number/void',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'invoice',
  },
};

const measuredUnits = {
  create: {
    endpoint: '/v2/measured_units',
    method: POST,
  },
  get: {
    endpoint: '/v2/measured_units/:measured_unit_id',
    method: GET,
  },
  list: {
    endpoint: '/v2/measured_units',
    method: GET,
  },
  remove: {
    endpoint: '/v2/measured_units/:measured_unit_id',
    method: DELETE,
  },
  update: {
    endpoint: '/v2/measured_units/:measured_units_id',
    method: PUT,
  }
};

const plans = {
  create: {
    endpoint: '/v2/plans',
    method: POST,
  },
  get: {
    endpoint: '/v2/plans/:plan_code',
    method: GET,
  },
  list: {
    endpoint: '/v2/plans',
    method: GET,
  },
  remove: {
    endpoint: '/v2/plans/:plan_code',
    method: DELETE,
  },
  update: {
    endpoint: '/v2/plans/:plan_code',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'plan',
  },
};

const planAddons = {
  create: {
    endpoint: '/v2/plans/:plan_code/add_ons',
    method: POST,
  },
  get: {
    endpoint: '/v2/plans/:plan_code/add_ons/:addon_code',
    method: GET,
  },
  list: {
    endpoint: '/v2/plans/:plan_code/add_ons',
    method: GET,
  },
  remove: {
    endpoint: '/v2/plans/:plan_code/add_ons/:add_on_code',
    method: DELETE,
  },
  update: {
    endpoint: '/v2/plans/:plan_code/add_ons/:add_on_code',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'add_on',
  },
};

const shippingAddresses = {
  create: {
    endpoint: '/v2/accounts/:account_code/shipping_addresses',
    method: POST,
  },
  list: {
    endpoint: '/v2/accounts/:account_code/shipping_addresses',
    method: GET,
  },
  remove: {
    endpoint: '/v2/accounts/:account_code/shipping_addresses/:shipping_address_id',
    method: DELETE,
  },
  update: {
    endpoint: '/v2/accounts/:account_code/shipping_addresses/:shipping_address_id',
    method: PUT,
  },
};

const subscriptions = {
  cancel: {
    endpoint: '/v2/subscriptions/:uuid/cancel',
    method: PUT,
  },
  create: {
    endpoint: '/v2/subscriptions',
    method: POST,
  },
  get: {
    endpoint: '/v2/subscriptions/:uuid',
    method: GET,
  },
  list: {
    endpoint: '/v2/subscriptions',
    method: GET,
  },
  listByAccount: {
    endpoint: '/v2/accounts/:account_code/subscriptions',
    method: GET,
  },
  pause: {
    endpoint: '/v2/subscriptions/:uuid/pause',
    method: PUT,
  },
  postpone: {
    endpoint: '/v2/subscriptions/:uuid/postpone',
    method: PUT,
    hasQuery: true,
  },
  preview: {
    endpoint: '/v2/subscriptions/preview',
    method: POST,
  },
  previewSubscriptionChange: {
    endpoint: '/v2/subscriptions/:uuid/preview',
    method: POST,
  },
  reactivate: {
    endpoint: '/v2/subscriptions/:uuid/reactivate',
    method: PUT,
  },
  resume: {
    endpoint: '/v2/subscriptions/:uuid/resume',
    method: PUT,
  },
  terminate: {
    endpoint: '/v2/subscriptions/:uuid/terminate',
    method: PUT,
    hasQuery: true,
  },
  update: {
    endpoint: '/v2/subscriptions/:uuid',
    method: PUT,
  },
  updateNotes: {
    endpoint: '/v2/subscriptions/:uuid/notes',
    method: PUT,
  },
  updatePreview: {
    endpoint: '/v2/subscriptions/:uuid/preview',
    method: PUT,
  },
  routeOptions: {
    bodyRoot: 'subscription',
  },
};

const transactions = {
  create: {
    endpoint: '/v2/transactions',
    method: POST,
  },
  get: {
    endpoint: '/v2/transactions/:id',
    method: GET,
  },
  list: {
    endpoint: '/v2/transactions',
    method: GET,
  },
  listByAccount: {
    endpoint: '/v2/accounts/:account_code/transactions',
    method: GET,
  },
  refund: {
    endpoint: '/v2/transactions/:id',
    method: DELETE,
  },
  routeOptions: {
    bodyRoot: 'transaction',
  },
};

const usage = {
  get: {
    endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage/:usage_id',
    method: GET,
  },
  list: {
    endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage',
    method: GET,
  },
  log: {
    endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage',
    method: POST,
  },
  update: {
    endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage/:usage_id',
    method: PUT,
  },
  remove: {
    endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage/:usage_id',
    method: DELETE,
  },
  routeOptions: {
    bodyRoot: 'usage',
  },
};

module.exports = {
  accounts,
  accountAcquisition,
  automatedExports,
  adjustments,
  billingInfo,
  coupons,
  couponRedemption,
  creditPayments,
  giftCards,
  invoices,
  measuredUnits,
  plans,
  planAddons,
  subscriptions,
  transactions,
  usage,
};
