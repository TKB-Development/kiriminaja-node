const kiriminaja = require('../kiriminaja')

const { Pickup } = kiriminaja;
const pickup = new Pickup({});

pickup.getSchedules()
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });