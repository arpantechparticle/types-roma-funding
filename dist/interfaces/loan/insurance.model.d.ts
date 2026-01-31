import { Timestamp } from "../timestamp";
import { InsuranceCoverageType } from "../../enum/loan/insurance-coverage-type.enum";
import { InsuranceStatus } from "../../enum/loan/insurance-status.enum";
export interface InsuranceModel {
    providerName: string;
    policyNumber: string;
    namedInsured: string;
    coverageType: InsuranceCoverageType;
    deductibleAmount: number | null;
    effectiveDate: Timestamp | null;
    expiryDate: Timestamp | null;
    lienHolderListed: boolean;
    status: InsuranceStatus;
    contactName: string | null;
    contactPhone: string | null;
    contactEmail: string | null;
}
