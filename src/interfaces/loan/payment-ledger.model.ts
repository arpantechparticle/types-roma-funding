import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentTransactionStatus } from "../../enum";
import { PaymentLedgerEntryType } from "../../enum/loan/payment-ledger-entry-type.enum";

export interface PaymentLedgerApiModel {
  id: string;
  loanId: string;
  amortizationEntryId: string;
  transactionId: string | null;

  paymentNumber: number;
  entryType: PaymentLedgerEntryType;

  // Contract (Scheduled) — from amortization schedule
  scheduledDueDate: Timestamp;
  scheduledPayment: number;
  scheduledInterest: number;
  scheduledPrincipal: number;
  scheduledFeePaid: number;
  beginningBalance: number;

  // Actual — recalculated based on real payment date
  actualPaymentDate: Timestamp | null;
  actualPaymentAmount: number;
  actualInterestAmount: number;
  actualPrincipalAmount: number;
  actualFeePaid: number;
  endingBalance: number;

  // Variance — contract vs actual
  daysEarly: number;
  daysLate: number;
  isEarly: boolean;
  isLate: boolean;
  isOnTime: boolean;
  interestVariance: number; // actual - scheduled (negative = savings)

  // Fees
  lateFeeAmount: number;
  nsfFeeAmount: number;

  // Status
  status: PaymentTransactionStatus;

  // Metadata
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
  timeZone: string;
  source: EntityType;
}
