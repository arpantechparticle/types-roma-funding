import { Timestamp } from "../timestamp";

export interface WarrantyModel {
  isActive: boolean;
  providerName: string | null;          // Manufacturer or 3rd party (legal name)
  warrantyType: "manufacturer" | "extended" | "dealer" | null;
  policyNumber: string | null;         // Reference only, not legal proof
  coverageStartDate: Timestamp | null;
  coverageEndDate: Timestamp | null;
  mileageLimit: number | null;         // Common in US warranties
  isTransferable: boolean | null;      // Important for resale
}
