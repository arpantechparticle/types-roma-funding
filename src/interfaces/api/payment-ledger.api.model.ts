import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";

export interface PaymentLedgerApiModel {
  id: string;
  loanId: string;
  paymentId: string;
  transactionId: string; // authorization.net transaction id
  date: Timestamp;

  type: "payment" | "fee";

  principalPaid: number;   
  interestPaid: number; 
  closingFeePaid: number;
  nsfFeePaid: number;
  lateFeePaid: number;

  lateFeeAdded: number;
  nsfFeeAdded: number;

  // 🔹 BEFORE SNAPSHOT (CRITICAL)
  principalBefore: number;
  accruedInterestBefore: number;
  nsfFeeBefore: number;
  lateFeeBefore: number;
  closingFeeBefore: number;
  feeOutstandingBefore: number;

  // 🔹 AFTER SNAPSHOT (CRITICAL)
  principalAfter: number;
  accruedInterestAfter: number;
  nsfFeeAfter: number;
  lateFeeAfter: number;
  closingFeeAfter: number;
  feeOutstandingAfter: number;

  // 🔹 OPTIONAL BUT POWERFUL
  daysAccrued?: number; // how many days interest was calculated before this event;

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
