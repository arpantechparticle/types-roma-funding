import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, AuthorizeNetTransactionStatus, TransactionStatus, PaymentMode } from "../../enum";

export interface PaymentTransactionApiModel {
  id: string;
  loanId: string;
  installmentId: string | null;
  paymentProfileId: string;
  amount: number;

  transactionId: string;
  authorizeNetTransactionId: string | null;
  authorizeNetCustomerProfileId: string;
  authorizeNetPaymentProfileId: string;

  authCode: string | null;
  responseCode: string | null;
  responseMessage: string | null;

  authorizeNetTransactionStatus: AuthorizeNetTransactionStatus;
  status: TransactionStatus;
  paymentMode: PaymentMode;
  errorMessage: string | null;
  authorizeNetErrorCode: string | null;
  authorizeNetErrorText: string | null;

  cardLast4: string;
  cardType: string;

  nsfFeeApplied?: boolean;
  paymentDate: Timestamp;

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
