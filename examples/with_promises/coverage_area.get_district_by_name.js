const kiriminaja = require('../kiriminaja')

const { CoverageArea } = kiriminaja;
const coverageArea = new CoverageArea({});

coverageArea.getDistrictByName({
  'search': 'Mataram'
})
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });