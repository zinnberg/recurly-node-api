const routeFilters = require('./filter.js');

const {
  GET,
  POST,
  DELETE,
  PUT,
} = require('./constants/methods');

const {
  success,
  err,
} = require('./parse-xml.js');

module.exports = function Method(definition, name, options){
    const {
      endpoint,
      method,
      hasQuery,
    } = definition;

    const {
      getFilter,
      putFilter,
      postFilter,
      deleteFilter,
    } = routeFilters(options);

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

        const {
          copy,
          body,
        } = filteredParams;

        const props = {
            method,
            endpoint: copy,
        };

        return this.createRequest(props, body).then(success).catch(err);
    };

    return mixin;
};
