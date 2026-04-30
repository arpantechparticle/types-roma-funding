import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentStatus, PaymentMode, LedgerEntryType, WaiverReason, FeePaymentStatus } from "../../enum";

export interface PaymentLedgerApiModel {
  id: string;
  loanId: string;
  transactionId: string | null;
  authorizeNetTransactionId: string | null; // authorization.net transaction id
  installmentId: string | null; // installment this payment was applied to (null if all installments paid)
  paymentNumber: number | null; // DEPRECATED: kept for backward compatibility. Use installmentNumber instead.

  /** Formatted invoice ID sent to Authorize.Net (e.g. `LN-1001-PAY-5`). Null for failed/fee/waiver entries. */
  invoiceId: string | null;

  /**
   * The amortization-schedule sequence number (1..N) of the installment this entry was applied to.
   * Mirrors `installment.paymentNumber`. Null when no installment is linked (e.g. early payoff).
   */
  installmentNumber: number | null;

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
  feePaymentStatus?: FeePaymentStatus | null;   // Unpaid | PartiallyPaid | Paid | Waived (null for non-fee entries)
  paidFeeAmount?: number | null;                 // Cumulative fee amount paid (null for non-fee entries)
  waivedFeeAmount?: number | null;               // Cumulative fee amount waived from the unpaid portion (null for non-fee entries)
  paidByLedgerIds?: string[] | null;             // Payment ledger IDs that paid this fee entry (only for fee-type entries)
  waivedByLedgerIds?: string[] | null;           // Waiver ledger IDs that waived this fee entry (only for fee-type entries)

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
  nsfFeeCreditBefore: number;
  nsfFeeCreditAfter: number;
  repossessionFeeCreditBefore: number;
  repossessionFeeCreditAfter: number;

  // 🔹 CREDIT CREATED IN THIS ENTRY (waiveFromPaid; 0 for all non-waiver entries)
  lateFeeCredit: number;
  nsfFeeCredit: number;
  repossessionFeeCredit: number;

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
