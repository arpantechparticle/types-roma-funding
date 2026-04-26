import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType, PaymentStatus, PaymentMode, LedgerEntryType, FeePaymentStatus } from "../../enum";
export interface PaymentLedgerApiModel {
    id: string;
    loanId: string;
    transactionId: string | null;
    authorizeNetTransactionId: string | null;
    installmentId: string | null;
    paymentNumber: number | null;
    /**
     * Sequential per-loan invoice number assigned to successful payment + payoff ledger entries.
     * Sourced from `loan.paymentCount + 1` and used as the Authorize.Net invoice suffix.
     * Null for failed payment / fee-only / waiver entries.
     */
    invoiceNumber: number | null;
    /**
     * The amortization-schedule sequence number (1..N) of the installment this entry was applied to.
     * Mirrors `installment.paymentNumber`. Null when no installment is linked (e.g. early payoff).
     */
    installmentNumber: number | null;
    entryType: LedgerEntryType;
    newAccruedInterest: number;
    daysAccrued: number;
    date: Timestamp;
    status: PaymentStatus;
    paymentMode: PaymentMode;
    totalAmount: number;
    principal: number;
    interest: number;
    closingFee: number;
    nsfFee: number;
    lateFee: number;
    repossessionFee: number;
    repossessionAgent?: string;
    storageLocationName?: string;
    waiverReason?: string;
    sourceLedgerEntryId?: string | null;
    interestCredit?: number;
    waivedFeeInterestDays?: number;
    waivedLateFee: number;
    waivedNsfFee: number;
    waivedRepossessionFee: number;
    feePaymentStatus?: FeePaymentStatus | null;
    paidFeeAmount?: number | null;
    paidByLedgerIds?: string[] | null;
    vehicleSalePrice?: number;
    vehicleBuyerName?: string;
    principalBefore: number;
    unpaidAccruedInterestBefore: number;
    repossessionFeeBefore: number;
    nsfFeeBefore: number;
    lateFeeBefore: number;
    closingFeeBefore: number;
    principalAfter: number;
    unpaidAccruedInterestAfter: number;
    repossessionFeeAfter: number;
    nsfFeeAfter: number;
    lateFeeAfter: number;
    closingFeeAfter: number;
    lateFeeWaivedBefore: number;
    lateFeeWaivedAfter: number;
    nsfFeeWaivedBefore: number;
    nsfFeeWaivedAfter: number;
    repossessionFeeWaivedBefore: number;
    repossessionFeeWaivedAfter: number;
    lateFeeCreditBefore: number;
    lateFeeCreditAfter: number;
    nfsFeeCreditBefore: number;
    nfsFeeCreditAfter: number;
    repossessionFeeCreditBefore: number;
    repossessionFeeCreditAfter: number;
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
