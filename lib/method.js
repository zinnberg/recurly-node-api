const { getFilter, putFilter, postFilter, deleteFilter } = require('./filter.js');

const { join } = require('path');

const { GET, POST, DELETE, PUT } = require(join(__dirname, 'constants', 'methods.js'));

const parser = require('./parse.xml.js');

exports = module.exports = function Method(definition, name){
    const { endpoint, method, hasQuery } = definition;

    const mixin = {};

    mixin[name] = function(params){
        const args = [].slice.call(arguments);

        let filteredParams;

        switch(method){
            case GET:
                filteredParams = getFilter(args, endpoint);
                break;
            case POST:
                filteredParams = postFilter(args, endpoint);
                break;
            case DELETE:
                filteredParams = deleteFilter(args, endpoint);
                break;
            case PUT:
                filteredParams = putFilter(args, endpoint, hasQuery);
                break;
        }

        const { copy, body } = filteredParams;

        const props = {
            method,
            endpoint: copy,
        };

        return this.createRequest(props, body).then(parser);
    };

    return mixin;
};
