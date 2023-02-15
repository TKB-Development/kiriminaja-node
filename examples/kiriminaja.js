const Kiriminaja = require('../src/kiriminaja');
const dotenv = require('dotenv');

dotenv.config();

const kiriminaja = new Kiriminaja({
  apiKey: process.env.KIRIMINAJA_API_KEY,
  baseURL: process.env.KIRIMINAJA_URL_STAGING,
});

module.exports = kiriminaja;