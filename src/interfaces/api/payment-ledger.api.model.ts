import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentStatus, PaymentMode, LedgerEntryType, WaiverReason } from "../../enum";

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
