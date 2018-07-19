const {
  request,
} = require('https');

const wrapper = (options, body) => {
  return new Promise((resolve, reject) => {
    const req = request(options, res => {
      let response = '';
      res.on('data', d => {
        response += d;
      });

      res.on('end', () => {
        const {
          statusCode,
          headers,
        } = res;

        const message = {
          response,
          statusCode,
          headers,
          hasResponse: true,
        };

        if(statusCode === 204){
          return resolve({
            statusCode,
            headers,
            hasResponse: false,
          });
        }

        if (statusCode >= 400) {
          return reject(Object.assign(message, {
            isRecurly: true,
          }));
        }

        return resolve(message);
      });
    });

    if (body != null) {
      req.write(body);
    }

    req.end();

    req.on('error', e => {
      return reject({
        response: e,
        isRecurly: false,
      });
    });
  });
};

module.exports = wrapper;
