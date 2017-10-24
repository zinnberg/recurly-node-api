const parser = require('xml2js-parser');

const opts = {
    explicitArray: false,
};

const parserObj = new parser(opts);

exports = module.exports = (message) => {
    const { response, headers, statusCode } = message;

    return parserObj.parseString(response).then((result) => {
        const parsedObj = {
            headers,
            statusCode,
            response: result,
        };

        return Promise.resolve(parsedObj);
    });
};
