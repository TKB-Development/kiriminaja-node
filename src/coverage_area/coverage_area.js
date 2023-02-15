const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function CoverageArea(options) {
  let aggOpts = options;
  if (
    CoverageArea._injectedOpts &&
    Object.keys(CoverageArea._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, CoverageArea._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

CoverageArea._injectedOpts = {};
CoverageArea._constructorWithOpts = function (options) {
  CoverageArea._injectedOpts = options;
  return CoverageArea;
}

CoverageArea.prototype.getProvince = function(data) {
  return promWithJsErr((resolve, reject) => {
    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/province`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
};

CoverageArea.prototype.getCity = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['provinsi_id'];
    if (!data.provinsi_id) {
      compulsoryFields.push('example: 5');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/city`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify({
        'provinsi_id': data.provinsi_id,
      })
    })
      .then(resolve)
      .catch(reject);
  });
}

CoverageArea.prototype.getDistrict = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['kabupaten_id'];
    if (!data.kabupaten_id) {
      compulsoryFields.push('example: 419');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/kecamatan`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify({
        'kabupaten_id': data.kabupaten_id,
      })
    })
      .then(resolve)
      .catch(reject);
  });
}

CoverageArea.prototype.getDistrictByName = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['search'];
    if (!data.search) {
      compulsoryFields.push('example: Ngemplak');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/v2/get_address_by_name`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify({
        'search': data.search,
      })
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = CoverageArea;