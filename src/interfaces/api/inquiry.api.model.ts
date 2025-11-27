import {EntityType} from "../../enum";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {AddressModel} from "../address.model";
import {PhoneNumberModel} from "../phone-number-model";

export type InquiryStatus = 'new' | 'in-progress' | 'resolved' | 'closed';

export interface InquiryBusinessInformation {
  businessName: string;
  doingBusinessAs?: string;
  typeOfBusiness: string;
  taxId?: string;
  email: string;
  phone: PhoneNumberModel;
  fax?: PhoneNumberModel;
  yearsInBusiness?: number;
  grossAnnualSales?: number;
  addressSearchText?: string;
  address: AddressModel;
}

export interface InquiryApplicantHomeDetails {
  ownHome: boolean;
  monthlyMortgageAmount?: number;
  currentMortgageBalance?: number;
  currentMarketValue?: number;
  lenderName?: string;
  yearsThere?: number;
  priorAddress?: AddressModel;
  addressSearchText?: string;
  address: AddressModel;
  landmark?: string | null;
}

export interface InquiryApplicantInformation {
  fullName: string;
  title: string;
  ownershipPercentage?: number;
  dateOfBirth?: string; // ISO date string
  socialSecurityNumber?: string;
  isUsCitizen?: boolean;
  driversLicenseNumber?: string;
  grossAnnualIncome?: number;
  additionalIncome?: number;
  sourceOfAdditionalIncome?: string;
  homePhone?: PhoneNumberModel;
  mobilePhone?: PhoneNumberModel;
  homeDetails: InquiryApplicantHomeDetails;
}

export interface InquiryEmploymentInformation {
  currentEmployer: string;
  currentEmployerPhone?: PhoneNumberModel;
  yearsThere?: number;
  position?: string;
  priorEmployer?: string;
  priorEmployerPhone?: PhoneNumberModel;
  priorPosition?: string;
  priorEmployerYears?: number;
}

export interface InquiryBankReference {
  bankName: string;
  branch?: string;
  accountNumber?: string;
  contactPerson?: string;
  phone?: PhoneNumberModel;
}

export interface InquiryReferenceDetail {
  name: string;
  address?: string;
  phone?: PhoneNumberModel;
}

export interface InquiryFinancingHistory {
  hasFinancedBefore: boolean;
  financeCompany?: string;
  equipmentType?: string;
  amountFinanced?: number;
}

export interface InquiryVehicleDetail {
  vehicleType: string;
  year: number;
  make: string;
  modelName?: string;
  body?: string;
  price?: number;
  payment?: number;
  termMonths?: number;
  downPayment?: number;
  salesperson?: string;
  stockNumber?: string;
  vin?: string;
  mileage?: number;
}

export interface InquiryDocuments {
  governmentId?: string;      // Driver’s License / PR Card / Passport
  proofOfIncome?: string;     // Paystubs, Bank Statements
  proofOfAddress?: string;    // Utility Bill / Bank Statement
  specificationSheet?: string; // Safety Cert, Registration Copy
}

export interface InquiryApiModel {
  id: string;
  status: InquiryStatus;
  timeZone: string;
  source: EntityType;
  businessInformation: InquiryBusinessInformation;
  applicants: InquiryApplicantInformation[];
  employmentInformation: InquiryEmploymentInformation;
  bankReference: InquiryBankReference;
  references?: InquiryReferenceDetail[];
  previousFinancingHistory?: InquiryFinancingHistory;
  vehicleDetails?: InquiryVehicleDetail;
  documents: InquiryDocuments;
  acknowledgement: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy?: CreatedByModel;
  updatedBy?: CreatedByModel;
  deletedBy?: CreatedByModel;
}

