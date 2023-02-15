const kiriminaja = require('../kiriminaja')

const { Pricing } = kiriminaja;
const pricing = new Pricing({});

pricing.getPrice({
  'origin': 5781,
  'destination': 310,
  'weight': 1000,
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });