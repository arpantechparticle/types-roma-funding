import { EntityType, InterestType, LoanProgramType, LoanStatus, LoanType, PaymentFrequency } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { CollateralModel } from "../loan/collateral.model";
import { LoanChecklist } from "../loan/checklist.model";
export interface LoanApiModel {
    id: string;
    loanNumber: string;
    loanType: LoanType;
    loanProgramType: LoanProgramType;
    status: LoanStatus;
    borrowers: BorrowerModel[];
    borrowerIds: string[];
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
    collateral: CollateralModel;
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
