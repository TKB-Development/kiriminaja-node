import Errors from './errors';
import { KiriminajaOptions } from "./kiriminaja_opts";
import { CoverageArea } from "./coverage_area";
import { Pricing } from "./pricing";

declare class Kiriminaja {
  constructor(opts: KiriminajaOptions);
  static Errors: typeof Errors;
  CoverageArea: typeof CoverageArea;
  Pricing: typeof Pricing;
}

export = Kiriminaja;
