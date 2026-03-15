import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
import { CollateralFundingPaymentMethod } from "../../enum/loan/collateral-funding-payment-method.enum";
export interface CollateralFundingApiModel {
    id: string;
    documentNumber: string;
    referenceNumber: string | null;
    paymentMethod: CollateralFundingPaymentMethod;
    proofOfPayment: string | null;
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
