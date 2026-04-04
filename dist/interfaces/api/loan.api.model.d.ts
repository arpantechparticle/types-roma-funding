import { EntityType, CalculationType, LoanCategory, LoanStatus, LoanType, PaymentFrequency, SubLoanStatus, CalculationMethod, LateFeeType, LateFeePercentageBase, InterestRateFrequency, AprIncludes, EcoaCode } from "../../enum";
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
    additionalInfo: AdditionalInfoModel;
    interestRate: number;
    interestRateFrequency: InterestRateFrequency;
    paymentFrequency: PaymentFrequency;
    interestAccrualMethod: InterestAccrualMethod;
    lateFeeConfig: LateFeeConfig;
    termCount: number;
    contractDate: Timestamp;
    firstPaymentDate: Timestamp;
    closedDate?: Timestamp | null;
    chargeOffDate?: Timestamp | null;
    principalOriginal: number;
    closingFee: number;
    installmentAmount: number;
    accruedInterest: number;
    totalInterestPaid: number;
    principalOutstanding: number;
    closingFeeOutstanding: number;
    closingFeePaid: number;
    lateFeeOutstanding: number;
    lateFeePaid: number;
    nfsFeeOutstanding: number;
    nfsFeePaid: number;
    includeClosingFeeInInterest: boolean;
    includeLateFeeInInterest: boolean;
    includeNsfFeeInInterest: boolean;
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
    flatFee: number;
    percentageFee: number;
    calculationMethod: CalculationMethod;
    type: LateFeeType;
    percentageBase: LateFeePercentageBase;
    gracePeriodDays: number;
    nsfFeeAmount: number;
}
export interface LoanUnderwritingDocuments {
    governmentId: string | null;
    bankStatement: string | null;
    specificationSheet: string | null;
    socialSecurityCard: string | null;
}
export interface AdditionalInfoModel {
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
