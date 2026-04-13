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

  principalPaid: number;
  interestPaid: number;
  closingFeePaid: number;
  nsfFeePaid: number;
  lateFeePaid: number;
  repossessionFeePaid: number; // For vehicle sale waterfall

  lateFeeAdded: number;
  nsfFeeAdded: number;

  // 🔹 BEFORE SNAPSHOT (CRITICAL)
  principalBefore: number;
  unpaidAccruedInterestBefore: number;
  nsfFeeBefore: number;
  lateFeeBefore: number;
  closingFeeBefore: number;
  feeOutstandingBefore: number;

  // 🔹 AFTER SNAPSHOT (CRITICAL)
  principalAfter: number;
  unpaidAccruedInterestAfter: number;
  nsfFeeAfter: number;
  lateFeeAfter: number;
  closingFeeAfter: number;
  feeOutstandingAfter: number;

  // 🔹 LATE FEE WAIVER (EntryType = LateFeeWaiver)
  lateFeeWaiverAmount?: number;
  waiverReason?: WaiverReason;
  waiverNotes?: string | null;

  // 🔹 REPOSSESSION (EntryType = Repossession)
  repossessionDetails?: {
    repossessionDate: Date;
    recoveryAgent: string;
    feesAdded: number;
    balanceBefore: number;
    balanceAfter: number;
  };
  repossessionFee?: number;
  repossessionFeeOutstanding?: number;

  // 🔹 VEHICLE SALE (EntryType = VehicleSale) - Simplified
  vehicleSaleDetails?: {
    saleDate: Timestamp;
    salePrice: number;
    saleCosts: number; // Total fees (auction, transport, repair combined)
    saleType: "auction" | "private" | "dealer";
    buyerInfo: string | null;
  };

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
