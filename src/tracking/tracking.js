const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Tracking(options) {
  let aggOpts = options;
  if (
    Tracking._injectedOpts &&
    Object.keys(Tracking._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Tracking._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Tracking._injectedOpts = {};
Tracking._constructorWithOpts = function (options) {
  Tracking._injectedOpts = options;
  return Tracking;
}

Tracking.prototype.getTracking = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['order_id'];
    const body = {};
    if (!data.order_id) {
      compulsoryFields.push('Nomor paket atau nomor resi paket. Example: OID-8793949106');
    } else {
      body.order_id = data.order_id;
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/tracking`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify(body)
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = Tracking;