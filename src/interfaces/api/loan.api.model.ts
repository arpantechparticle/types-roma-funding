import {
  EntityType,
  InterestType,
  LoanProgramType,
  LoanStatus,
  LoanType,
  PaymentFrequency,
  ServicingStatus,
} from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";

export interface LoanApiModel {
  id: string;
  loanNumber: string;
  loanType: LoanType;
  loanProgramType: LoanProgramType;
  status: LoanStatus;

  borrowers: BorrowerModel[];
  borrowerIds: string[];

  vehicleId: string;
  vehicle: VehicleModel;

  // Loan terms
  principalAmount: number;
  discountAmount: number | null;
  originationFee: number | null;

  interestRate: number;
  interestType: InterestType;

  paymentFrequency: PaymentFrequency;
  termCount: number;

  contractDate: Timestamp;
  firstPaymentDate: Timestamp;
  gracePeriodDays: number;

  checklist: LoanChecklist;

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
}

export interface VehicleModel {
  id: string;
  year: string;
  make: string;
  model: string;
  trim: string;
}

export interface LoanChecklist {
  underwriting: {
    completedFundingPacket: boolean;
    keyOnFile: boolean;
    qbSyncCompleted: boolean;
    gpsInstalled: boolean;
    verifiedResidence: boolean;
    verifiedReferences: boolean;
    verifiedIncome: boolean;
    insuranceListedAsLienholder: boolean;
  };

  operations: {
    modificationMade: boolean;
    repairsTruckInRepair: boolean;
    advancementGiven: boolean;
    profileUpdated: boolean;
    welcomePhoneCall: boolean;
    welcomePacket: boolean;
    titleReceived: boolean;
  };

  paidOff: {
    accountClosure: boolean;
    lienRelease: boolean;
    gpsUninstalled: boolean;
  };

  repossession: {
    salesTaxRefundApplied: boolean;
    vehicleSold: boolean;
    warrantyCancellation: boolean;
    gapCancellation: boolean;
    repossessionStatement: boolean;
  };

  specialAccountStatus: {
    accidentIndicator: boolean;
    paymentPlanAccepted: boolean;
    insuranceClaimPending: boolean;
  };

  audits: {
    titleELT: boolean;
    finalAudit: boolean;
  };

  custody: {
    keyInRomaPossession: boolean;
  };
}
