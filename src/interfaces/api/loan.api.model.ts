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

  // Financial Terms
  interestType: InterestType;
  paymentFrequency: PaymentFrequency;

  principalAmount: number;
  totalInterest: number;
  totalPayable: number;
  apr: number;
  termCount: number;
  installmentAmount: number;

  // Schedule
  startDate: Date;
  maturityDate: Date;

  // Servicing Info
  outstandingPrincipal: number;
  outstandingInterest: number;
  outstandingFees: number;
  nextDueDate: Date;
  nextDueAmount: number;
  delinquencyDays: number;
  servicingStatus: ServicingStatus;

  // Compliance
  state: string;
  contractSignedAt: Timestamp;

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