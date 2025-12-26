import { Timestamp } from "../timestamp";
import { LicensePlateStatus } from "../../enum/collateral/license-plate-status.enum";

export interface LicensePlateModel {
  number: string | null; // e.g. "7ABC123"
  state: string | null; // e.g. "CA", "TX"
  status: LicensePlateStatus | null;
  registrationExpirationDate: Timestamp | null;
}
