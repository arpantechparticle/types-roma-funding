import { EntityType, CalculationType, LoanCategory, LoanStatus, LoanType, PaymentFrequency, SubLoanStatus, CalculationMethod, InterestRateFrequency, AprIncludes, EcoaCode } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { CollateralModel } from "../loan/collateral.model";
import { LoanChecklist } from "../loan/checklist.model";
import { InsuranceModel } from "../loan/insurance.model";
import { InterestAccrualMethod } from "../../enum/loan/interest-accrual-method.enum";
export interface LoanApiModel {
    id: string;
    loanNumber: string;
    status: LoanStatus;
    subStatus: SubLoanStatus;
    loanType: LoanType;
    loanCategory: LoanCategory;
    calculationType: CalculationType;
    aprIncludes: AprIncludes;
    loanOriginationDetails: LoanOriginationDetailsModel;
    interestRate: number;
    interestRateFrequency: InterestRateFrequency;
    paymentFrequency: PaymentFrequency;
    interestAccrualMethod: InterestAccrualMethod;
    lateFeeConfig: LateFeeConfig;
    termInYears: number;
    installmentAmount: number;
    contractDate: Timestamp;
    firstPaymentDate: Timestamp;
    closedDate?: Timestamp | null;
    chargeOffDate?: Timestamp | null;
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
    unpaidAccruedInterest: number;
    closingFee: number;
    closingFeeOutstanding: number;
    closingFeePaid: number;
    latFee: number;
    lateFeeOutstanding: number;
    lateFeePaid: number;
    nfsFee: number;
    nfsFeeOutstanding: number;
    nfsFeePaid: number;
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
    lastPaymentDate: Timestamp | null;
    lastAccrualDate: Timestamp;
    nextDueDate: Timestamp;
    daysPastDue: number;
    delinquentSince: Timestamp | null;
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
export interface BorrowerModel {
    id: string;
    name: string;
    ECOACode: EcoaCode | null;
}
export interface LateFeeConfig {
    isActive: boolean;
    flatFee: number;
    percentageFee: number;
    calculationMethod: CalculationMethod;
    gracePeriodDays: number;
    nsfFeeAmount: number;
}
export interface LoanUnderwritingDocuments {
    governmentId: string | null;
    bankStatement: string | null;
    specificationSheet: string | null;
    socialSecurityCard: string | null;
}
export interface LoanOriginationDetailsModel {
    salesPrice: number;
    netAmountDown: number | null;
    taxes: number | null;
    gapInsurance: number | null;
    warranty: number | null;
    dealerProfit: number | null;
    reserveAmount: number | null;
    feeBreakdown: FeeBreakdownModel;
}
export interface FeeBreakdownModel {
    closingFees: number;
    technologyFee: number;
    collateralReviewFee: number;
    underwritingFee: number;
}
