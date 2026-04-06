import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, AuthorizeNetTransactionStatus } from "../../enum";

export interface PaymentTransactionApiModel {
  id: string;
  loanId: string;
  installmentId: string | null;
  paymentProfileId: string;
  amount: number;

  transactionId: string;
  authorizeNetTransactionId: string | null;

  authCode: string | null;
  responseCode: string | null;
  responseMessage: string | null;

  authorizeNetTransactionStatus: AuthorizeNetTransactionStatus;
  status: "initiated" | "success" | "failed";  
  paymentMode: "manual" | "auto";
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
