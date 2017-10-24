const { countParams, replaceParams, addQueryObject } = require('./utils');

const js2xmlparser = require('js2xmlparser');

const getFilter = (args, endpoint) => {
    const { length } = args;

    const [arg1, arg2] = args;

    let copy = endpoint.slice();

    const paramCount = countParams(copy);

    if (length === 2) {
        copy = replaceParams(copy, arg1);
        copy = addQueryObject(copy, arg2);
    }

    if (length === 1 && paramCount === 0) {
        copy = addQueryObject(copy, arg1);
    }

    if (length === 1 && paramCount > 0) {
        copy = replaceParams(copy, arg1);
    }

    return {
        copy,
    }
};

const postFilter = (args, endpoint) => {
    const { length } = args;

    const [arg1, arg2] = args;

    let copy = endpoint.slice();

    let body;

    if (length === 0) {
        return { copy };
    }

    if (length === 1) {
        body = arg1;
    }

    if (length === 2) {
        copy = replaceParams(copy, arg1);
        body = arg2;
    }

    body = js2xmlparser(body);

    return {
        copy,
        body,
    }
};

const putFilter = (args, endpoint, hasQuery) => {
    const { length } = args;

    const [arg1, arg2, arg3] = args;

    let copy = endpoint.slice();

    let body = null;

    const paramCount = countParams(copy);

    if (length === 1 && paramCount > 0) {
        copy = replaceParams(copy, arg1);
    }

    if (length === 1 && paramCount === 0){
        body = js2xmlparser(arg1);
    }

    if (length === 2 && hasQuery != null){
        copy = replaceParams(copy, arg1);
        copy = addQueryObject(copy, arg2);
    }

    if (length === 2 && hasQuery == null) {
        copy = replaceParams(copy, arg1);
        body = js2xmlparser(arg2);
    }

    return {
        copy,
        body,
    }
};

const deleteFilter = (args, endpoint) => {
    const { length } = args;

    const [arg1] = args;

    let copy = endpoint.slice();

    if (length === 1) {
        copy = replaceParams(copy, arg1);
    }

    return {
        copy,
    }
};

exports = module.exports = {
    getFilter,
    postFilter,
    putFilter,
    deleteFilter,
};
