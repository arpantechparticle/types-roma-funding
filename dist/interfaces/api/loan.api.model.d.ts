import { EntityType, CalculationType, LoanCategory, LoanStatus, LoanType, PaymentFrequency, LoanClosureReason, InterestRateFrequency, AprIncludes, PaymentMode } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { CollateralModel, BorrowerModel, FeeConfig, LoanUnderwritingDocuments, LoanOriginationDetailsModel, LoanChecklist, InsuranceModel } from "../loan";
import { InterestAccrualMethod } from "../../enum/loan/interest-accrual-method.enum";
export interface LoanApiModel {
    id: string;
    loanNumber: string;
    status: LoanStatus;
    loanType: LoanType;
    loanCategory: LoanCategory;
    calculationType: CalculationType;
    aprIncludes: AprIncludes;
    loanOriginationDetails: LoanOriginationDetailsModel;
    interestRate: number;
    interestRateFrequency: InterestRateFrequency;
    paymentFrequency: PaymentFrequency;
    interestAccrualMethod: InterestAccrualMethod;
    feeConfig: FeeConfig;
    termInYears: number;
    installmentAmount: number;
    contractDate: Timestamp;
    amortizationStartDate: Timestamp;
    firstPaymentDate: Timestamp;
    nextDueDate: Timestamp;
    originalNextDueDate: Timestamp;
    lastPaymentDate: Timestamp | null;
    lastAccrualDate: Timestamp | null;
    daysPastDue: number;
    delinquentSince: Timestamp | null;
    payoffDate?: Timestamp | null;
    payoffAmount?: number | null;
    chargeOffDate?: Timestamp | null;
    deficiencyBalance?: number | null;
    repossessionDate?: Timestamp | null;
    repossessionAgent?: string | null;
    storageLocationName?: string | null;
    vehicleSaleDate?: Timestamp | null;
    vehicleSalePrice?: number | null;
    closureReason?: LoanClosureReason | null;
    customClosureReason?: string | null;
    principalOriginal: number;
    principalOutstanding: number;
    principalPaid: number;
    /**
     * total accrued interest including past due amounts
     * it will be updated whenever user makes a payment until now
     */
    totalAccruedInterest: number;
    totalInterestPaid: number;
    /**
     * Intrest amount which was not paid in the last payment due to inefficient amount
     * so we have to take it from the next payment
     */
    accruedInterestLeft: number;
    /**
     * Interest accrued since lastAccrualDate (includes principal + fees)
     * This accumulates between ledger entries and is reset to 0 upon payment
     */
    currentAccruedInterest: number;
    closingFee: number;
    closingFeeOutstanding: number;
    closingFeePaid: number;
    closingFeeWaived: number;
    lateFee: number;
    lateFeeOutstanding: number;
    lateFeePaid: number;
    lateFeeWaived: number;
    nfsFee: number;
    nfsFeeOutstanding: number;
    nfsFeePaid: number;
    nfsFeeWaived: number;
    repossessionFee: number;
    repossessionFeeOutstanding: number;
    repossessionFeePaid: number;
    repossessionFeeWaived: number;
    borrowers: BorrowerModel[];
    borrowerIds: string[];
    collateral: CollateralModel;
    checklist: LoanChecklist;
    insurance?: InsuranceModel | null;
    inquiryId: string | null;
    hasDealer: boolean;
    dealerId: string | null;
    titleDocument: string | null;
    underwritingDocuments: LoanUnderwritingDocuments | null;
    paymentMode: PaymentMode;
    autoPaymentSuspended: boolean;
    lastAutoPaymentDate: Timestamp | null;
    rescheduledFromDate?: Timestamp;
    rescheduleCount?: number;
    lastRescheduleReason?: string;
    lastRescheduleBy?: CreatedByModel;
    lastRescheduleAt?: Timestamp;
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
