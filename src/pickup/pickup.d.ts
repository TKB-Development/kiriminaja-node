import { KiriminajaOptions } from "../kiriminaja_opts";

export = class Pickup {
    constructor({});
    static _constructorWithOpts: (opts: KiriminajaOptions) => typeof Pickup;
    getSchedules(): Promise<object>;
    requestPickup(data: {
        address: string,
        phone: string,
        kecamatan_id: number,
        packages: [],
        name: string,
        zipcode?: string,
        schedule: string,
        platform_name?: string,
    }): Promise<object>;
    getPayment(data: { payment_id: string }): Promise<object>;
}