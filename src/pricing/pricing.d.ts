import { KiriminajaOptions } from "../kiriminaja_opts";

export = class Pricing {
    constructor({});
    static _constructorWithOpts: (opts: KiriminajaOptions) => typeof Pricing;
    getPrice(data: {
        origin: number,
        destination: number,
        weight: number,
        insurance?: number,
        item_value?: number,
        courier?: string,
    }): Promise<object>;
}