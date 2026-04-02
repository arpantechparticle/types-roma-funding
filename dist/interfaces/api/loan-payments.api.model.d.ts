import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
export interface LoanPaymentApiModel {
    id: string;
    loanId: string;
    transactionId: string;
    paymentDate: Timestamp;
    amount: number;
    method: "Manual" | "Auto";
    status: "Success" | "Failed";
    allocationStatus?: 'pending' | 'allocated' | 'failed';
    allocationError?: string | null;
    allocatedAt?: Timestamp | null;
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
