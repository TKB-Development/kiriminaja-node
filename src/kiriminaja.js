const Errors = require('./errors');
const { CoverageArea } = require('./coverage_area');

function Kiriminaja(options) {
  let {
    apiKey,
    baseURL,
  } = options;

  // default values of opts
  baseURL = baseURL || 'https://kiriminaja.com';

  this.opts = { apiKey, baseURL };

  this.CoverageArea = CoverageArea._constructorWithOpts(this.opts);
}

Kiriminaja.Errors = Errors;

module.exports = Kiriminaja;