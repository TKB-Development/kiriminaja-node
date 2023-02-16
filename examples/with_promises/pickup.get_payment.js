const kiriminaja = require('../kiriminaja')

const { Pickup } = kiriminaja;
const pickup = new Pickup({});

pickup.getPayment({
  'payment_id': 'XID-2857560013'
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });