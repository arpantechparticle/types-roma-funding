import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentStatus, PaymentMode, LedgerEntryType, WaiverReason, FeePaymentStatus } from "../../enum";

export interface PaymentLedgerApiModel {
  id: string;
  loanId: string;
  transactionId: string | null;
  authorizeNetTransactionId: string | null; // authorization.net transaction id
  installmentId: string | null; // installment this payment was applied to (null if all installments paid)
  paymentNumber: number | null; // installment's payment number (null if no installment linked)

  // 🔹 ENTRY TYPE
  entryType: LedgerEntryType; // Type of ledger entry (payment, fee, payoff, write_off, etc.)

  // 🔹 ACCRUED INTEREST
  newAccruedInterest: number;
  daysAccrued: number; // how many days interest was calculated before this event;

  date: Timestamp;
  status: PaymentStatus;
  paymentMode: PaymentMode;
  totalAmount: number;

  principal: number;
  interest: number;
  closingFee: number;
  nsfFee: number;
  lateFee: number;
  repossessionFee: number;

  repossessionAgent?: string;
  storageLocationName?: string;

  waiverReason?: string;
  sourceLedgerEntryId?: string | null; // Links waiver entry back to the original fee entry
  interestCredit?: number; // Interest credit due to fee waiver (positive = credit to borrower)
  waivedFeeInterestDays?: number; // Days from fee date to waiver date used for interest credit calculation

  // 🔹 WAIVED FEE AMOUNTS (positive value = amount waived in this entry)
  waivedLateFee: number;
  waivedNsfFee: number;
  waivedRepossessionFee: number;

  // 🔹 FEE PAYMENT TRACKING (only for fee-type entries: LateFee, NsfFee, RepossessionFee)
  feePaymentStatus?: FeePaymentStatus | null;   // Unpaid | PartiallyPaid | Paid (null for non-fee entries)
  paidFeeAmount?: number | null;                 // Cumulative fee amount paid (null for non-fee entries)
  targetFeeLedgerIds?: string[] | null;          // Fee ledger IDs this payment covers (null for non-payment entries)
  paidByLedgerIds?: string[] | null;             // Payment ledger IDs that paid this fee entry (only for fee-type entries)

  vehicleSalePrice?: number;
  vehicleBuyerName?: string;

  // 🔹 BEFORE SNAPSHOT (CRITICAL)
  principalBefore: number;
  unpaidAccruedInterestBefore: number;
  repossessionFeeBefore: number;
  nsfFeeBefore: number;
  lateFeeBefore: number;
  closingFeeBefore: number;

  // 🔹 AFTER SNAPSHOT (CRITICAL)
  principalAfter: number;
  unpaidAccruedInterestAfter: number;
  repossessionFeeAfter: number;
  nsfFeeAfter: number;
  lateFeeAfter: number;
  closingFeeAfter: number;

  // 🔹 WAIVED FEE SNAPSHOTS (AUDIT TRAIL)
  lateFeeWaivedBefore: number;
  lateFeeWaivedAfter: number;
  nsfFeeWaivedBefore: number;
  nsfFeeWaivedAfter: number;
  repossessionFeeWaivedBefore: number;
  repossessionFeeWaivedAfter: number;

  // 🔹 FEE CREDIT SNAPSHOTS (from waiving already-paid fees)
  lateFeeCreditBefore: number;
  lateFeeCreditAfter: number;
  nfsFeeCreditBefore: number;
  nfsFeeCreditAfter: number;
  repossessionFeeCreditBefore: number;
  repossessionFeeCreditAfter: number;

  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel | null;
  timeZone: string;
  source: EntityType;
}
