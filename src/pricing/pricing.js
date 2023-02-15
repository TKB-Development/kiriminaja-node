const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Pricing(options) {
  let aggOpts = options;
  if (
    Pricing._injectedOpts &&
    Object.keys(Pricing._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Pricing._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Pricing._injectedOpts = {};
Pricing._constructorWithOpts = function (options) {
  Pricing._injectedOpts = options;
  return Pricing;
}

Pricing.prototype.getPrice = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['origin', 'destination', 'weight', 'item_value'];
    const body = {};
    if (!data.origin) {
      compulsoryFields.push('ID dari kecamatan_id pengirim. Example: 5781');
    } else {
      body.origin = data.origin;
    }
    if (!data.destination) {
      compulsoryFields.push('ID dari kecamatan_id customer. Example: 310');
    } else {
      body.destination = data.destination;
    }
    if (!data.weight) {
      compulsoryFields.push('Akumulasi berat paket dalam gram (berat paket aktual). Example: 1000');
    } else {
      body.weight = data.weight;
    }
    if (data.item_value) {
      body.item_value = data.item_value;
    }
    if (data.insurance) {
      body.insurance = data.insurance;
    }
    if (data.courier) {
      body.courier = data.courier;
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/shipping_price`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify(body)
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = Pricing;