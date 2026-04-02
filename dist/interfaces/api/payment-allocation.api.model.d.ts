import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
export interface PaymentAllocationApiModel {
    id: string;
    paymentId: string;
    installmentId: string;
    principalApplied: number;
    interestApplied: number;
    lateFeeApplied: number;
    nsfFeeApplied: number;
    closingFeeApplied: number;
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
