import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
import { InsuranceCancellationType } from "../../enum/loan/insurance-cancellation-type.enum";
import { PhoneNumberModel } from "../phone-number-model";

export interface InsurancePolicyApiModel {
  id: string;
  policyNumber: string;
  insuranceCompany: string;
  coverageStart: Timestamp;
  coverageEnd: Timestamp;
  coverageAmount: number | null;
  cancellationDate: Timestamp | null;
  cancellationType: InsuranceCancellationType | null;
  cancellationReason: string | null;
  agency: string;
  agent: string;
  agentPhone: PhoneNumberModel | null;
  agentEmail: string | null;
  isActive: boolean;

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
