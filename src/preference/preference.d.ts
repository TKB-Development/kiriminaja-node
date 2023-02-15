import { KiriminajaOptions } from "../kiriminaja_opts";

export = class Preference {
    constructor({});
    static _constructorWithOpts: (opts: KiriminajaOptions) => typeof Preference;
    setWhiteListExpedition(data: { services?: [] }): Promise<object>;
}