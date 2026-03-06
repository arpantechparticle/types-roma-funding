import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentMethodType } from "../../enum";

export interface PaymentProfileApiModel {
  id: string;
  loanId: string;
  borrowerId: string;

  authorizeNetCustomerProfileId: string;
  authorizeNetPaymentProfileId: string;

  paymentMethodType: PaymentMethodType;
  cardLast4: string;
  cardType: string;
  expirationDate: string;

  isDefault: boolean;

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
