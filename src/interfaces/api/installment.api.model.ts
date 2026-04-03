import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, InstallmentStatus } from "../../enum";

export interface InstallmentApiModel {
  id: string;
  paymentNumber: number;
  dueDate: Timestamp;

  // 🔹 Expected (schedule)
  principalDue: number;
  interestDue: number;
  closingFeeDue: number;
  nsfFeeDue: number;
  lateFeeDue: number;
  totalDue: number;

  remainingPrincipal: number; //after installment payment
  remainingClosingFee: number; //after installment payment

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
  status: InstallmentStatus;

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
