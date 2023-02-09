import Errors from './errors';
import { KiriminajaOptions } from "./kiriminaja_opts";

declare class Kiriminaja {
  constructor(opts: KiriminajaOptions);
  static Errors: typeof Errors;
}

export = Kiriminaja;
