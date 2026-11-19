import { EntityType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
import { AddressModel } from "../address.model";
import { PhoneNumberModel } from "../phone-number-model";
export type ApplicationStatus = 'draft' | 'new' | 'in-progress' | 'accepted' | 'rejected';
export interface ApplicationBasicInfo {
    name: string;
    address: AddressModel;
    email: string;
    phone: PhoneNumberModel;
    hasCdl: boolean;
    driversLicenseNumber: string | null;
}
export interface ApplicationVehicleDetail {
    year: number;
    make: string;
    modelName: string;
    purchasePrice: number;
    downPayment: number | null;
    mileage: number;
    dealerName: string;
    dealerEmail: string;
    dealerPhone: PhoneNumberModel;
    hasTradeIn: boolean;
    tradeInYear: number | null;
    tradeInMake: string | null;
    tradeInModelName: string | null;
    tradeInMileage: number | null;
}
export interface ApplicationDocuments {
    hasConsolidatedDocument: boolean;
    consolidatedDocument: string | null;
    governmentId: string | null;
    bankStatementMonth1: string | null;
    bankStatementMonth2: string | null;
    bankStatementMonth3: string | null;
    billOfSale: string | null;
    specificationSheet: string | null;
    socialSecurityCard: string | null;
}
export interface ApplicationReferenceDetail {
    name: string | null;
    address: AddressModel | null;
    phone: PhoneNumberModel | null;
}
export interface ApplicationApiModel {
    id: string;
    /** Assigned when the applicant submits. Null while the application is a draft. */
    applicationNumber: number | null;
    status: ApplicationStatus;
    /** Step to reopen. Finish later stores 3, the documents step. */
    currentStep: number | null;
    /**
     * Set when the applicant clicks Finish later so the resume email is sent.
     * Absent on applications created before drafts existed.
     */
    resumeLinkRequestedAt?: Timestamp | null;
    timeZone: string;
    source: EntityType;
    basicInfo: ApplicationBasicInfo;
    vehicle: ApplicationVehicleDetail | null;
    documents: ApplicationDocuments | null;
    references: ApplicationReferenceDetail[];
    acknowledgement: boolean;
    /** True when the applicant opted in to SMS on the public apply form. */
    smsConsent?: boolean;
    loanId: string | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
}
