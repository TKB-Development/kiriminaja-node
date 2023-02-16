const {Auth, Validate, promWithJsErr, fetchWithHTTPErr} = require('../utils');

const PATH = '';

function Pickup(options) {
  let aggOpts = options;
  if (
    Pickup._injectedOpts &&
    Object.keys(Pickup._injectedOpts).length > 0
  ) {
    aggOpts = Object.assign({}, options, Pickup._injectedOpts);
  }

  this.opts = aggOpts;
  this.API_ENDPOINT = this.opts.baseURL + PATH;
}

Pickup._injectedOpts = {};
Pickup._constructorWithOpts = function (options) {
  Pickup._injectedOpts = options;
  return Pickup;
}

Pickup.prototype.getSchedules = function(data) {
  return promWithJsErr((resolve, reject) => {
    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/v2/schedules`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
    })
      .then(resolve)
      .catch(reject);
  });
};

Pickup.prototype.requestPickup = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['address', 'phone', 'name', 'kecamatan_id', 'packages', 'schedule'];
    if (!data.address) {
      compulsoryFields.push('Alamat lengkap. Example: Jl. Jodipati No.29 ...');
    }
    if (!data.phone) {
      compulsoryFields.push('Nomor telepon menggunakan format angka. Example: 0813334546789');
    }
    if (!data.name) {
      compulsoryFields.push('Nama pengirim paket. Example: Tokotries');
    }
    if (!data.kecamatan_id) {
      compulsoryFields.push('Kecamatan id pengirim. Example: 5784');
    }
    if (!data.packages) {
      compulsoryFields.push('Detail paket yang dikirim. Example: { order_id: 1 ... }');
    }
    if (!data.schedule) {
      compulsoryFields.push('Lihat bagian pickup schedules. Example: 2023-2-16 16:00:00');
    }
    if (!data.packages[0].order_id) {
      compulsoryFields.push('Harus memiliki prefix berupa string. Example: DEV-000000018');
    }
    if (!data.packages[0].destination_name) {
      compulsoryFields.push('Nama penerima. Example: Flag Test');
    }
    if (!data.packages[0].destination_phone) {
      compulsoryFields.push('Nomor telepon diawali dengan angka 0. Example: 082223323333');
    }
    if (!data.packages[0].destination_address) {
      compulsoryFields.push('Alamat penerima, kami menggunakan minimal 10 karakter untuk menghindari Bad Address pickup. Example: Jl. Magelang KM 11 ...');
    }
    if (!data.packages[0].destination_kecamatan_id) {
      compulsoryFields.push('Kecamatan penerima. Example: 419');
    }
    if (!data.packages[0].weight) {
      compulsoryFields.push('Berat paket dalam gram. Example: 520');
    }
    if (!data.packages[0].width) {
      compulsoryFields.push('Dalam cm. Example: 8');
    }
    if (!data.packages[0].length) {
      compulsoryFields.push('Dalam cm. Example: 8');
    }
    if (!data.packages[0].height) {
      compulsoryFields.push('Dalam cm. Example: 8');
    }
    if (!data.packages[0].item_value) {
      compulsoryFields.push('Nilai barang secara keseluruhan. Example: 275000');
    }
    if (!data.packages[0].shipping_cost) {
      compulsoryFields.push('Biaya pengiriman. Example: 65000');
    }
    if (!data.packages[0].service) {
      compulsoryFields.push('Lihat shipping price untuk daftar service. Example: sicepat');
    }
    if (!data.packages[0].service_type) {
      compulsoryFields.push('The service type, like REG, CTC, SIUNT. Example: SIUNT');
    }
    if (!data.packages[0].package_type_id) {
      compulsoryFields.push('Tipe paket tersedia. Example: 1');
    }
    if (!data.packages[0].item_name) {
      compulsoryFields.push('Isi paket. Example: TEST Item name');
    }
    if (data.packages[0].cod == undefined) {
      compulsoryFields.push('Isi 0 untuk paket non COD. Example: 0');
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/v2/request_pickup`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify(data)
    })
      .then(resolve)
      .catch(reject);
  });
}

Pickup.prototype.getPayment = function(data) {
  return promWithJsErr((resolve, reject) => {
    const compulsoryFields = ['payment_id'];
    const body = {};
    if (!data.payment_id) {
      compulsoryFields.push('The pickup number / payment id. Example: XID-2857560013');
    } else {
      body.payment_id = data.payment_id;
    }
    Validate.rejectOnMissingFields(compulsoryFields, data, reject);

    fetchWithHTTPErr(`${this.API_ENDPOINT}/api/mitra/v2/get_payment`, {
      method: 'POST',
      headers: Auth.authWithBasicHeader(this.opts.apiKey, 'application/json'),
      body: JSON.stringify(body)
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = Pickup;