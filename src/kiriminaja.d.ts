import Errors from './errors';
import { KiriminajaOptions } from "./kiriminaja_opts";
import { CoverageArea } from "./coverage_area";
import { Pricing } from "./pricing";
import { Pickup } from "./pickup";
import { Preference } from "./preference";
import { Cancellation } from "./cancellation";
import { Tracking } from "./tracking";

declare class Kiriminaja {
  constructor(opts: KiriminajaOptions);
  static Errors: typeof Errors;
  CoverageArea: typeof CoverageArea;
  Pricing: typeof Pricing;
  Pickup: typeof Pickup;
  Preference: typeof Preference;
  Cancellation: typeof Cancellation;
  Tracking: typeof Tracking;
}

export = Kiriminaja;
