import { KiriminajaOptions } from "../kiriminaja_opts";

export = class CoverageArea {
    constructor({});
    static _constructorWithOpts: (opts: KiriminajaOptions) => typeof CoverageArea;
    getProvince(): Promise<object>;
    getCity(data: { provinsi_id: number }): Promise<object>;
    getDistrict(data: { kabupaten_id: number }): Promise<object>;
    getDistrictByName(data: { search: string }): Promise<object>;
}