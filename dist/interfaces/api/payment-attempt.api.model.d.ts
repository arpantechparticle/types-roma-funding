import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
export interface PaymentAttemptApiModel {
    id: string;
    loanId: string;
    installmentId: string;
    amount: number;
    status: "initiated" | "success" | "failed";
    nsfFeeApplied?: boolean;
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
