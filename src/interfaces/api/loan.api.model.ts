import {
  EntityType,
  CalculationType,
  LoanCategory,
  LoanStatus,
  LoanType,
  PaymentFrequency,
  SubLoanStatus,
  CalculationMethod,
  LateFeeType,
  LateFeePercentageBase,
  InterestRateFrequency,
  AprIncludes,
  EcoaCode,
} from "../../enum";
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
  // amountFinanced: number; //16000
  
  /**
   * Finance Charge = Total Interest + Prepaid Finance Fees
   * This represents the total cost of borrowing over the life of the loan
   */
  // financeCharge: number; // 1200 => X

  /**
   * Total Loan Amount = Amount Financed + Finance Charge
   * This represents the total amount of the loan, including both the principal and the interest
   */
  // totalLoanAmount: number; // 17200 => X

  // discountAmount: number;

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

  principalOriginal: number; // Vehicle Sale Price + Sales Tax + Title + Registration + Dealer/Doc Fees + GAP/Warranty (if financed) - Down Payment - Trade-In Credit
  closingFee: number;
  initialEstimatedTotalInterest: number;
  initialTotalOfPayments: number;
  initialInstallmentAmount: number;
  
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

  // installmentAmount: number; // => X
  // totalScheduledPayments: number; // usually = termCount => X
  // totalInterestExpected: number; // => X
  // totalOfPayments: number; // TILA requirement  => X
  // gracePeriodDays: number;

  borrowers: BorrowerModel[];
  borrowerIds: string[];
  collateral: CollateralModel;
  checklist: LoanChecklist;
  insurance?: InsuranceModel | null;
  inquiryId: string | null;

  titleDocument: string | null;
  underwritingDocuments: LoanUnderwritingDocuments | null;

  // Closing fee & principal tracking (fee-first allocation)
  // closingFeeTotal: number;
  // closingFeeRemaining: number;
  // principalTotal: number;
  // principalRemaining: number;

  // running balances
  // outstandingPrincipal: number;

  lastPaymentDate: Timestamp | null;
  lastAccrualDate: Timestamp;
  nextDueDate: Timestamp;
  daysPastDue: number; // days past after the next due date, added when there is no payment after nextDueDate
  delinquentSince: Timestamp | null;

  hasDealer?: boolean;
  dealerId: string;

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
  flatFee: number; // e.g. $25
  percentageFee: number; // e.g. 5 (% of installment)
  calculationMethod: CalculationMethod;
  type: LateFeeType;
  percentageBase: LateFeePercentageBase;
  gracePeriodDays: number;
  nsfFeeAmount: number; // e.g. $35
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
  closingFees: number; // $1250
  technologyFee: number; // $750
  collateralReviewFee: number; // $1100
  underwritingFee: number; // $900
}