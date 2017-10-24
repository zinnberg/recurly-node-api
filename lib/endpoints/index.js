const { join } = require('path');

const { GET, POST, DELETE, PUT } = require(join(__dirname, '..', 'constants', 'methods.js'));

const accounts = {
        list: {
            endpoint: '/v2/accounts',
            method: GET,
        },
        get: {
            endpoint: '/v2/accounts/:account_code',
            method: GET,
        },
        create:{
            endpoint: '/v2/accounts',
            method: GET,
        },
        update: {
            endpoint: '/v2/accounts/:account_code',
            method: PUT,
        },
        close: {
            endpoint: '/v2/accounts/:account_code',
            method: DELETE,
        },
        reopen: {
            endpoint: '/v2/accounts/:account_code/reopen',
            method: DELETE,
        },
        notes: {
            endpoint: '/v2/accounts/:account_code/notes',
            method: GET,
        },
};

const adjustments = {
    list: {
        endpoint: '/v2/accounts/:account_code/adjustments',
        method: GET,
    },
    get: {
        endpoint: '/v2/adjustments/:uuid',
        method: GET,
    },
    create: {
        endpoint: '/v2/accounts/:account_code/adjustments',
        method: POST,
    },
    remove: {
        endpoint: '/v2/adjustments/:uuid',
        method: DELETE,
    },
};

const billingInfo = {
    get: {
        endpoint: '/v2/accounts/:account_code/billing_info',
        method: GET,
    },
    update: {
        endpoint: '/v2/accounts/:account_code/billing_info',
        method: PUT,
    },
    create: {
        endpoint: '/v2/accounts/:account_code/billing_info',
        method: POST,
    },
    remove: {
        endpoint: '/v2/accounts/:account_code/billing_info',
        method: DELETE,
    },
};

const coupons = {
    list: {
        endpoint: '/v2/coupons',
        method: GET,
    },
    get: {
        endpoint: '/v2/coupons/:coupon_code',
        method: GET,
    },
    create: {
        endpoint: '/v2/coupons',
        method: POST,
    },
    deactivate: {
        endpoint: '/v2/coupons/:coupon_code',
        method: DELETE,
    },
};

const couponRedemption = {
    redeem: {
        endpoint: '/v2/coupons/:coupon_code/redeem',
        method: POST,
    },
    get: {
        endpoint: '/v2/accounts/:account_code/redemption',
        method: GET,
    },
    remove: {
        endpoint: '/v2/accounts/:account_code/redemption',
        method: DELETE,
    },
    getByInvoice: {
        endpoint: '/v2/invoices/:invoice_number/redemption',
        method: GET,
    },
};

const invoices = {
    list: {
        endpoint: '/v2/invoices',
        method: GET,
    },
    listByAccount: {
        endpoint: '/v2/accounts/:account_code/invoices',
        method: GET,
    },
    get: {
        endpoint: '/v2/invoices/:invoice_number',
        method: GET,
    },
    create: {
        endpoint: '/v2/accounts/:account_code/invoices',
        method: POST,
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
    markSuccessful: {
        endpoint: '/v2/invoices/:invoice_number/mark_successful',
        method: PUT,
    },
    markFailed: {
        endpoint: '/v2/invoices/:invoice_number/mark_failed',
        method: PUT,
    },
    enterOfflinePayment: {
        endpoint: '/v2/invoices/:invoice_number/transactions',
        method: POST,
    },
};

const plans = {
    list: {
        endpoint: '/v2/plans',
        method: GET,
    },
    get: {
        endpoint: '/v2/plans/:plan_code',
        method: GET,
    },
    create: {
        endpoint: '/v2/plans',
        method: POST,
    },
    update: {
        endpoint: '/v2/plans/:plan_code',
        method: PUT,
    },
    remove: {
        endpoint: '/v2/plans/:plan_code',
        method: DELETE,
    }
};

const planAddons = {
    list: {
        endpoint: '/v2/plans/:plan_code/add_ons',
        method: GET,
    },
    get: {
        endpoint: '/v2/plans/:plan_code/add_ons/:addon_code',
        method: GET,
    },
    create: {
        endpoint: '/v2/plans/:plan_code/add_ons',
        method: POST,
    },
    update: {
        endpoint: '/v2/plans/:plan_code/add_ons/:add_on_code',
        method: PUT,
    },
    remove: {
        endpoint: '/v2/plans/:plan_code/add_ons/:add_on_code',
        method: DELETE,
    }
};

const subscriptions = {
    list: {
        endpoint: '/v2/subscriptions',
        method: GET,
    },
    listByAccount: {
        endpoint: '/v2/accounts/:account_code/subscriptions',
        method: GET,
    },
    get: {
        endpoint: '/v2/subscriptions/:uuid',
        method: GET,
    },
    create: {
        endpoint: '/v2/subscriptions',
        method: POST,
    },
    preview: {
        endpoint: '/v2/subscriptions/preview',
        method: POST,
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
    cancel: {
        endpoint: '/v2/subscriptions/:uuid/cancel',
        method: PUT,
    },
    reactivate: {
        endpoint: '/v2/subscriptions/:uuid/reactivate',
        method: PUT,
    },
    terminate: {
        endpoint: '/v2/subscriptions/:uuid/terminate',
        method: PUT,
        hasQuery: true,
    },
    postpone: {
        endpoint: '/v2/subscriptions/:uuid/postpone',
        method: PUT,
        hasQuery: true,
    },
};

const transactions = {
    list: {
        endpoint: '/v2/transactions',
        method: GET,
    },
    listByAccount: {
        endpoint: '/v2/accounts/:account_code/transactions',
        method: GET,
    },
    get: {
        endpoint: '/v2/transactions/:id',
        method: GET,
    },
    create: {
        endpoint: '/v2/transactions',
        method: POST,
    },
    refund: {
        endpoint: '/v2/transactions/:id',
        method: DELETE,
    },
};

const usage = {
    list: {
        endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage',
        method: GET,
    },
    log: {
        endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage',
        method: POST,
    },
    get: {
        endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage/:usage_id',
        method: GET,

    },
    update: {
        endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage/:usage_id',
        method: PUT,
    },
    remove: {
        endpoint: '/v2/subscriptions/:uuid/add_ons/:add_on_code/usage/:usage_id',
        method: DELETE,
    },
};

exports = module.exports = {
    accounts,
    adjustments,
    billingInfo,
    coupons,
    couponRedemption,
    invoices,
    plans,
    planAddons,
    subscriptions,
    transactions,
    usage,
};
