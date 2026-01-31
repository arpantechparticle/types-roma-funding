import { Timestamp } from "../timestamp";
import { InsuranceCoverageType } from "../../enum/loan/insurance-coverage-type.enum";
import { InsuranceStatus } from "../../enum/loan/insurance-status.enum";

export interface InsuranceModel {
  // --- Policy identity ---
  providerName: string; 
  policyNumber: string;

  // --- Insured party ---
  namedInsured: string; // DEFAULT = borrower.name

  // --- Coverage ---
  coverageType: InsuranceCoverageType; // FullCoverage required
  deductibleAmount: number | null; // 1000

  // --- Policy term ---
  effectiveDate: Timestamp | null;
  expiryDate: Timestamp | null;

  // --- Lender protection ---
  lienHolderListed: boolean; // MUST be true

  // --- Status ---
  status: InsuranceStatus;

  // --- Agent / contact (optional, operational only) ---
  contactName: string | null; // Cottingham & Butler
  contactPhone: string | null;
  contactEmail: string | null; // certificates@...
}
