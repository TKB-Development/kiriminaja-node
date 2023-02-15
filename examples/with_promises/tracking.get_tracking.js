const kiriminaja = require('../kiriminaja')

const { Tracking } = kiriminaja;
const tracking = new Tracking({});

tracking.getTracking({
  'order_id': 'OID-8793949106',
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });