import {
  EntityType,
  CalculationType,
  LoanCategory,
  LoanStatus,
  LoanType,
  PaymentFrequency,
  LoanClosureReason,
  InterestRateFrequency,
  AprIncludes,
  PaymentMode,
} from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { 
  CollateralModel, 
  BorrowerModel, 
  FeeConfig, 
  LoanUnderwritingDocuments, 
  LoanOriginationDetailsModel, 
  LoanChecklist, 
  InsuranceModel 
} from "../loan";
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
  amortizationStartDate: Timestamp; // First day interest starts accruing (typically first Friday of contract)
  firstPaymentDate: Timestamp;
  nextDueDate: Timestamp;
  originalNextDueDate: Timestamp; // Original due date for current period (for late fee calculation)
  lastPaymentDate: Timestamp | null;
  lastAccrualDate: Timestamp | null;
  daysPastDue: number; // days past after the next due date, added when there is no payment after nextDueDate
  delinquentSince: Timestamp | null;
  
  payoffDate?: Timestamp | null;
  payoffAmount?: number | null;

  chargeOffDate?: Timestamp | null;
  deficiencyBalance?: number | null;
  surplusBalance?: number | null;

  repossessionDate?: Timestamp | null;
  repossessionAgent?: string | null;
  storageLocationName?: string | null;

  vehicleSaleDate?: Timestamp | null;
  vehicleSalePrice?: number | null;
  
  closureReason?: LoanClosureReason | null;
  customClosureReason?: string | null;

  principalOriginal: number; // Vehicle Sale Price + Sales Tax + Title + Registration + Dealer/Doc Fees + GAP/Warranty (if financed) - Down Payment - Trade-In Credit
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

  lateFee: number;              // Cumulative total late fees ever applied
  lateFeeOutstanding: number;   // Current outstanding (unpaid) late fees
  lateFeePaid: number;          // Total late fees paid
  lateFeeWaived: number;        // Total late fees waived

  nfsFee: number;
  nfsFeeOutstanding: number;
  nfsFeePaid: number;
  nfsFeeWaived: number;         // Total NSF fees waived

  // Repossession fee tracking
  repossessionFee: number;
  repossessionFeeOutstanding: number;
  repossessionFeePaid: number;
  repossessionFeeWaived: number; // Total repossession fees waived

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

  // Auto-payment configuration
  paymentMode: PaymentMode; // 'auto' | 'manual'
  autoPaymentSuspended: boolean; // Flag set to true after failed payment
  lastAutoPaymentDate: Timestamp | null; // Prevents duplicate charges on same due date

  // Rescheduling tracking
  rescheduledFromDate?: Timestamp;    // Previous due date (before last reschedule)
  rescheduleCount?: number;           // How many times rescheduled
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