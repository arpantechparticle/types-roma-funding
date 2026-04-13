import { EntityType, PaymentMethodType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";



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
  deletedBy: CreatedByModel | null;
  timeZone: string;
  source: EntityType;
}
