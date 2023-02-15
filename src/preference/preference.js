const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Preference(options) {
  let aggOpts = options;
  if (
    Preference._injectedOpts &&
    Object.keys(Preference._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Preference._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Preference._injectedOpts = {};
Preference._constructorWithOpts = function (options) {
  Preference._injectedOpts = options;
  return Preference;
}

Preference.prototype.setWhiteListExpedition = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['services'];
    const body = {};
    if ((data.services.length != null) || data.services) {
      body.services = data.services;
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/v3/set_whitelist_services`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify(body)
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = Preference;