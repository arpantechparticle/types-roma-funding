import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
import { InsuranceCancellationType } from "../../enum/loan/insurance-cancellation-type.enum";

export interface InsurancePolicyApiModel {
  id: string;
  policyNumber: string;
  coverageStart: Timestamp;
  coverageEnd: Timestamp;
  cancellationDate: Timestamp | null;
  cancellationType: InsuranceCancellationType | null;
  agency: string;
  agent: string;

  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
  timeZone: string;
  source: EntityType;
}
