const kiriminaja = require('../kiriminaja')

const { Preference } = kiriminaja;
const preference = new Preference({});

preference.setWhiteListExpedition({
  'services': ["jne","jnt","sicepat"],
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });