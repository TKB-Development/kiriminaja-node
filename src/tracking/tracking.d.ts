import { KiriminajaOptions } from "../kiriminaja_opts";

export = class Tracking {
    constructor({});
    static _constructorWithOpts: (opts: KiriminajaOptions) => typeof Tracking;
    getTracking(data: { order_id: string }): Promise<object>;
}