import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, InstallmentStatus } from "../../enum";

export interface InstallmentApiModel {
  id: string;
  paymentNumber: number;
  dueDate: Timestamp;

  principalDue: number;
  interestDue: number;
  closingFeeDue: number;
  nsfFeeDue: number;
  lateFeeDue: number;

  principalPaid: number;
  interestPaid: number;
  closingFeePaid: number;
  nsfFeePaid: number;
  lateFeePaid: number;
  
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
