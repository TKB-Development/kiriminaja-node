const Errors = require('./errors');

function Kiriminaja(options) {
  let {
    apiKey,
    baseURL,
  } = options;

  // default values of opts
  baseURL = baseURL || 'https://kiriminaja.com';
}

Kiriminaja.Errors = Errors;

module.exports = Kiriminaja;