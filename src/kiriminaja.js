const Errors = require('./errors');
const { CoverageArea } = require('./coverage_area');
const { Pricing } = require('./pricing');
const { Preference } = require('./preference');
const { Cancellation } = require('./cancellation');
const { Tracking } = require('./tracking');

function Kiriminaja(options) {
  let {
    apiKey,
    baseURL,
  } = options;

  // default values of opts
  baseURL = baseURL || 'https://kiriminaja.com';

  this.opts = { apiKey, baseURL };

  this.CoverageArea = CoverageArea._constructorWithOpts(this.opts);
  this.Pricing = Pricing._constructorWithOpts(this.opts);
  this.Preference = Preference._constructorWithOpts(this.opts);
  this.Cancellation = Cancellation._constructorWithOpts(this.opts);
  this.Tracking = Tracking._constructorWithOpts(this.opts);
}

Kiriminaja.Errors = Errors;

module.exports = Kiriminaja;