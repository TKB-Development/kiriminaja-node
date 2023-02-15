import { KiriminajaOptions } from "../kiriminaja_opts";

export = class Cancellation {
    constructor({});
    static _constructorWithOpts: (opts: KiriminajaOptions) => typeof Cancellation;
    cancelShipment(data: { awb: string, reason: string }): Promise<object>;
}