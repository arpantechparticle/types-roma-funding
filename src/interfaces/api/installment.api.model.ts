import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentMode, InstallmentStatus, RescheduleReason } from "../../enum";

export interface InstallmentApiModel {
  id: string;
  paymentNumber: number;

  // Due Date Fields:
  dueDate: Timestamp;                 // ACTUAL due date - can be changed by rescheduling
  originalDueDate: Timestamp;         // ORIGINAL due date - set at creation, NEVER changes
                                     // Used for late fee calculation

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
  paymentMode?: PaymentMode;
  status: InstallmentStatus;

  // 🔹 Rescheduling tracking
  rescheduledFromDate?: Timestamp;    // Previous due date (before last reschedule)
  rescheduleCount?: number;           // How many times rescheduled
  lastRescheduleReason?: RescheduleReason;
  lastRescheduleBy?: CreatedByModel;
  lastRescheduleAt?: Timestamp;

  // 🔹 Late fee tracking
  lateFeeAppliedAt?: Timestamp;       // When late fee was last applied
  lateFeeAppliedCount?: number;       // How many times late fee applied

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
