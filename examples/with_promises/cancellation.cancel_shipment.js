const kiriminaja = require('../kiriminaja')

const { Cancellation } = kiriminaja;
const cancellation = new Cancellation({});

cancellation.cancelShipment({
  'awb': "KAJ-00001",
  'reason': "Ganti produk",
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });