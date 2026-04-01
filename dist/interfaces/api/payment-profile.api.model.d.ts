import { PaymentMethodType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
export interface PaymentProfileApiModel {
    id: string;
    loanId: string;
    borrowerId: string | null;
    authorizeNetCustomerProfileId: string;
    authorizeNetPaymentProfileId: string;
    paymentMethodType: PaymentMethodType;
    cardLast4: string;
    cardType: string;
    expirationDate: string;
    isDefault: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    isDeleted: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    timeZone: string;
    source: string;
}
