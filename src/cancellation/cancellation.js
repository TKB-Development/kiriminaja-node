const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Cancellation(options) {
  let aggOpts = options;
  if (
    Cancellation._injectedOpts &&
    Object.keys(Cancellation._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Cancellation._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Cancellation._injectedOpts = {};
Cancellation._constructorWithOpts = function (options) {
  Cancellation._injectedOpts = options;
  return Cancellation;
}

Cancellation.prototype.cancelShipment = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['awb', 'reason'];
    const body = {};
    if (!data.awb) {
      compulsoryFields.push('AWB tidak sama dengan order_id. Example: KAJ-00001');
    } else {
      body.awb = data.awb;
    }
    if (!data.reason) {
      compulsoryFields.push('Alasan pembatalan paket. Example: Ganti produk');
    } else {
      body.reason = data.reason;
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/v3/cancel_shipment`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify(body)
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = Cancellation;