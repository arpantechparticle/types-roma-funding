import { Timestamp } from "../timestamp";
export interface WarrantyModel {
    isActive: boolean;
    providerName: string | null;
    warrantyType: "manufacturer" | "extended" | "dealer" | null;
    policyNumber: string | null;
    coverageStartDate: Timestamp | null;
    coverageEndDate: Timestamp | null;
    mileageLimit: number | null;
    isTransferable: boolean | null;
}
