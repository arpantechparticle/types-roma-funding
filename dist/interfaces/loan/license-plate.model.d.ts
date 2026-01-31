import { Timestamp } from "../timestamp";
import { LicensePlateStatus } from "../../enum/collateral/license-plate-status.enum";
export interface LicensePlateModel {
    number: string | null;
    state: string | null;
    status: LicensePlateStatus | null;
    registrationExpirationDate: Timestamp | null;
}
