import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";

export interface InstallmentApiModel {
  id: string;
  paymentNumber: number;
  dueDate: Timestamp;

  // 🔹 Expected (schedule)
  interestDue: number;
  totalDue: number; // principalDue + feeDue 

  // 🔹 Display breakdown (visual layer only)
  totalBalanceBefore: number;
  totalBalanceAfter: number;
  principalPortionDisplay?: number;
  feePortionDisplay?: number;
  closingFeePortionDisplay?: number;
  lateFeePortionDisplay?: number;
  nsfFeePortionDisplay?: number;  

  // 🔹 Actual (tracking)
  principalPaid: number;
  interestPaid: number;
  closingFeePaid: number;
  nsfFeePaid: number;
  lateFeePaid: number;
  totalPaid: number;

  // 🔹 Status
  isFullyPaid?: boolean;
  paidDate?: Timestamp | null;
  paymentMode?: "auto" | "manual";
  status: "success" | "failed" | "scheduled";

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
