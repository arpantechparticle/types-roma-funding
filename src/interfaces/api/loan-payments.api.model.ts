import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";

export interface LoanPaymentApiModel {
  id: string;

  amount: number;
  date: Timestamp;

  method: "Manual" | "Auto";
  status: "Success" | "Failed";

  transactionId: string; // from authorize.net
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
