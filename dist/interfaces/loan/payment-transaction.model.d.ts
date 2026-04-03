import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentTransactionStatus } from "../../enum";
export interface PaymentTransactionApiModel {
    id: string;
    loanId: string;
    installmentId: string;
    paymentProfileId: string;
    transactionId: string;
    authCode: string | null;
    responseCode: string | null;
    responseMessage: string | null;
    transactionStatus: PaymentTransactionStatus;
    status: "initiated" | "success" | "failed";
    type: "manual" | "auto";
    errorMessage: string | null;
    cardLast4: string;
    cardType: string;
    nsfFeeApplied?: boolean;
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
