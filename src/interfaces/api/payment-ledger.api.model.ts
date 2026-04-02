import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";

export interface PaymentLedgerApiModel {
  id: string;
  date: Timestamp;

  type: "interest_accrual" | "payment" | "fee";

  principalChange: number;   // negative when paid
  interestChange: number;    // positive when accrued
  closingFeeChange: number;
  nsfFeeChange: number;
  lateFeeChange: number;

  balanceAfter: number;

  transactionId: string; // authorization.net transaction id

  loanId: string;
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
