import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentMode, InstallmentStatus, RescheduleReason } from "../../enum";

export interface InstallmentApiModel {
  id: string;
  paymentNumber: number;

  dueDate: Timestamp;                 // ACTUAL due date - can be changed by rescheduling
  originalDueDate: Timestamp;         // ORIGINAL due date - set at creation, NEVER changes

  // 🔹 Expected (schedule)
  principalDue: number;
  interestDue: number;
  closingFeeDue: number;
  totalDue: number; // principalDue + interestDue + closingFeeDue

  // 🔹 Display breakdown (visual layer only)
  totalBalanceBefore: number;
  totalBalanceAfter: number;

  // 🔹 Actual (tracking)
  principalPaid: number;
  interestPaid: number;
  closingFeePaid: number;
  nsfFeePaid: number;
  lateFeePaid: number;
  repossessionFeePaid: number;
  totalPaid: number;

  paymentDate?: Timestamp | null;
  paymentMode?: PaymentMode;
  status: InstallmentStatus;

  // 🔹 Rescheduling tracking
  rescheduledFromDate?: Timestamp;    // Previous due date (before last reschedule)
  rescheduleCount?: number;           // How many times rescheduled
  lastRescheduleReason?: string;
  lastRescheduleBy?: CreatedByModel;
  lastRescheduleAt?: Timestamp;

  // 🔹 Late fee tracking
  lateFeeAppliedAt: Timestamp | null;  // When late fee was last applied (null = not yet applied)
  lateFeeAppliedCount?: number;         // How many times late fee applied
  nsfFeeAppliedAt: Timestamp | null;  // When NSF fee was last applied (null = not yet applied)
  nsfFeeAppliedCount?: number;         // How many times NSF fee applied

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
