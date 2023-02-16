const kiriminaja = require('../kiriminaja')

const { Pickup } = kiriminaja;
const pickup = new Pickup({});

const requestPackagesProperties = {
  order_id: "DEV-000000018",
  destination_name: "Flag Test",
  destination_phone: "082223323333",
  destination_address: "Jl. Magelang KM 11",
  destination_kecamatan_id: 419,
  destination_zipcode: 55598,
  weight: 520,
  width: 8,
  height: 8,
  length: 8,
  qty : 1,
  item_value: 275000,
  shipping_cost: 65000,
  service: "sicepat",
  service_type: "SIUNT",
  item_name: "TEST Item name",
  package_type_id: 1,
  cod: 0,
  // insurance_amount: 500,
  drop: false,
  note: "-",
};

pickup.requestPickup({
  'address': 'Jl. Jodipati No.29 Perum Taman Kencana Sejahtera',
  'phone': '0813334546789',
  'kecamatan_id': 5784,
  'packages': [requestPackagesProperties],
  'name': "Tokotries",
  'zipcode': "55598",
  'schedule': "2023-2-16 16:00:00",
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });