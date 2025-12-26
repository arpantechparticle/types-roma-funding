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

export interface LoanApiModel {
  id: string;
  loanNumber: string;
  status: LoanStatus;
  subStatus: SubLoanStatus;

  loanType: LoanType;
  loanCategory: LoanCategory;
  calculationType: CalculationType;
  aprIncludes: AprIncludes;

  //loan terms
  totalLoanAmount: number;
  discountAmount: number;
  underwritingFee: number;
  interestRate: number;
  interestRateFrequency: InterestRateFrequency;
  contractDate: Timestamp;
  firstPaymentDate: Timestamp;
  paymentFrequency: PaymentFrequency;
  termCount: number;
  gracePeriodDays: number;

  lateFeeConfig: LateFeeConfig;

  borrowers: BorrowerModel[];
  borrowerIds: string[];
  collateral: CollateralModel;
  checklist: LoanChecklist;
  insurance?: InsuranceModel | null;
  closedDate: Timestamp | null;
  additionalInfo: AdditionalInfoModel;

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

export interface BorrowerModel {
  id: string;
  name: string;
  ECOACode: EcoaCode;
}

export interface LateFeeConfig {
  flatFee: number;               // e.g. $25
  percentageFee: number;         // e.g. 5 (% of installment)
  calculationMethod: CalculationMethod;
  type: LateFeeType;
  percentageBase: LateFeePercentageBase;
}

export interface AdditionalInfoModel {
  netAmountDown: number;
  salesPrice: number;
  taxes: number;
  gapInsurance: number;
  warranty: number;
  dealerProfit: number;
  reserveAmount: number;
}