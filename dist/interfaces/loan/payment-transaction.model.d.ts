import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentTransactionStatus } from "../../enum";
export interface PaymentTransactionApiModel {
    id: string;
    loanId: string;
    amortizationEntryId: string | null;
    paymentProfileId: string;
    amount: number;
    authorizeNetTransactionId: string;
    authCode: string | null;
    responseCode: string | null;
    responseMessage: string | null;
    status: PaymentTransactionStatus;
    isAutoCharge: boolean;
    errorMessage: string | null;
    cardLast4: string;
    cardType: string;
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
