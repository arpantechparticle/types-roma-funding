import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentStatus, PaymentMode } from "../../enum";

export interface PaymentLedgerApiModel {
  id: string;
  loanId: string;
  transactionId: string | null;
  authorizeNetTransactionId: string | null; // authorization.net transaction id
  installmentId: string | null; // installment this payment was applied to (null if all installments paid)

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
