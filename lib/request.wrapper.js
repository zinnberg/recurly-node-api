const { request } = require('https');

const wrapper = (options, body) => {
    return new Promise((resolve, reject) => {
        const req = request(options, (res) => {
            let response = '';

            res.on('data', (d) => {
                response += d;
            });

            res.on('end', () => {
                const { statusCode, headers } = res;

                const message = {
                    response,
                    statusCode,
                    headers,
                };

                return resolve(message);
            });
        });

        if(body != null){
            req.write(body);
        }

        req.end();

        req.on('error', (e) => {
            return reject(e);
        });
    });
};

exports = module.exports = wrapper;
