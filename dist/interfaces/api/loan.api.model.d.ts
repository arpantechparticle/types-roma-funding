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
    /**
     * Amount Financed = Vehicle Sale Price + Sales Tax + Title + Registration + Dealer/Doc Fees + GAP/Warranty (if financed) - Down Payment - Trade-In Credit
     * This represents the principal amount on which interest is calculated
     */
    /**
     * Finance Charge = Total Interest + Prepaid Finance Fees
     * This represents the total cost of borrowing over the life of the loan
     */
    /**
     * Total Loan Amount = Amount Financed + Finance Charge
     * This represents the total amount of the loan, including both the principal and the interest
     */
    discountAmount: number;
    interestRate: number;
    interestRateFrequency: InterestRateFrequency;
    contractDate: Timestamp;
    firstPaymentDate: Timestamp;
    paymentFrequency: PaymentFrequency;
    initialFinanceCharge: number;
    initialTotalOfPayments: number;
    initialInstallmentAmount: number;
    /**
    * principalOriginal - Amount Financed = Vehicle Sale Price + Sales Tax + Title + Registration + Dealer/Doc Fees + GAP/Warranty (if financed) - Down Payment - Trade-In Credit
    * This represents the principal amount on which interest is calculated
    */
    principalOriginal: number;
    closingFee: number;
    lateFee: number;
    nfsFee: number;
    principalOutstanding: number;
    closingFeeOutstanding: number;
    lateFeeOutstanding: number;
    nfsFeeOutstanding: number;
    feeOutstanding: number;
    termCount: number;
    gracePeriodDays: number;
    lateFeeConfig: LateFeeConfig;
    borrowers: BorrowerModel[];
    borrowerIds: string[];
    collateral: CollateralModel;
    checklist: LoanChecklist;
    insurance?: InsuranceModel | null;
    closedDate: Timestamp | null;
    accruedInterest: number;
    accruedLateFees: number;
    otherFeesBalance: number;
    lastPaymentDate: Timestamp | null;
    lastAccrualDate: Timestamp;
    nextDueDate: Timestamp;
    interestAccrualMethod: InterestAccrualMethod;
    daysPastDue: number;
    delinquentSince: Timestamp | null;
    chargeOffDate?: Timestamp | null;
    inquiryId: string | null;
    titleDocument: string | null;
    underwritingDocuments: LoanUnderwritingDocuments | null;
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
