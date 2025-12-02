import {EntityType} from "../../enum";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {AddressModel} from "../address.model";
import {PhoneNumberModel} from "../phone-number-model";

export type InquiryStatus = 'new' | 'in-progress' | 'resolved' | 'closed';

export interface InquiryBusinessInformation {
  businessName: string;
  doingBusinessAs: string | null;
  typeOfBusiness: string;
  taxId: string | null;
  email: string;
  phone: PhoneNumberModel;
  fax: PhoneNumberModel | null;
  yearsInBusiness: number;
  grossAnnualSales: number;
  address: AddressModel;
}

export interface InquiryApplicantHomeDetails {
  ownHome: boolean;
  monthlyMortgageAmount: number | null;
  currentMortgageBalance: number | null;
  currentMarketValue: number | null;
  lenderName: string | null;
  yearsThere: number;
  priorAddress: AddressModel | null;
  address: AddressModel;
  landmark: string | null;
}

export interface InquiryApplicantInformation {
  fullName: string;
  title: string;
  ownershipPercentage: number | null;
  dateOfBirth: string; // ISO date string
  socialSecurityNumber: string | null;
  isUsCitizen: boolean;
  driversLicenseNumber: string | null;
  grossAnnualIncome: number | null;
  additionalIncome: number | null;
  sourceOfAdditionalIncome: string | null;
  homePhone: PhoneNumberModel | null;
  mobilePhone: PhoneNumberModel | null;
  homeDetails: InquiryApplicantHomeDetails;
}

export interface InquiryEmploymentInformation {
  currentEmployer: string;
  currentEmployerPhone: PhoneNumberModel | null;
  yearsThere: number;
  position: string;
  priorEmployer: string | null;
  priorEmployerPhone: PhoneNumberModel | null;
  priorPosition: string | null;
  priorEmployerYears: number | null;
}

export interface InquiryBankReference {
  bankName: string;
  branch: string | null;
  accountNumber: string | null;
  contactPerson: string | null;
  phone: PhoneNumberModel | null;
}

export interface InquiryReferenceDetail {
  name: string;
  address: string | null;
  phone: PhoneNumberModel | null;
}

export interface InquiryFinancingHistory {
  hasFinancedBefore: boolean;
  financeCompany: string | null;
  equipmentType: string | null;
  amountFinanced: number | null;
}

export interface InquiryVehicleDetail {
  vehicleType: string;
  year: number;
  make: string;
  modelName: string | null;
  body: string | null;
  price: number | null;
  payment: number | null;
  termMonths: number | null;
  downPayment: number | null;
  salesperson: string | null;
  stockNumber: string | null;
  vin: string | null;
  mileage: number | null;
}

export interface InquiryDocuments {
  governmentId: string | null;      // Driver’s License / PR Card / Passport
  proofOfIncome: string | null;     // Paystubs, Bank Statements
  proofOfAddress: string | null;    // Utility Bill / Bank Statement
  specificationSheet: string | null; // Safety Cert, Registration Copy
}

export interface InquiryApiModel {
  id: string;
  inquiryNumber: number;
  status: InquiryStatus;
  timeZone: string;
  source: EntityType;
  businessInformation: InquiryBusinessInformation;
  applicant: InquiryApplicantInformation;
  employmentInformation: InquiryEmploymentInformation;
  bankReference: InquiryBankReference;
  references: InquiryReferenceDetail[] | null;
  previousFinancingHistory: InquiryFinancingHistory | null;
  vehicleDetails: InquiryVehicleDetail | null;
  documents: InquiryDocuments;
  acknowledgement: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
}

