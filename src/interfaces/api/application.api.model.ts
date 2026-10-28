import {EntityType} from "../../enum";
import {CreatedByModel} from "../created-by.model";
import {Timestamp} from "../timestamp";
import {AddressModel} from "../address.model";
import {PhoneNumberModel} from "../phone-number-model";

export type ApplicationStatus = 'new' | 'in-progress' | 'accepted' | 'rejected';

export interface ApplicationBasicInfo {
  name: string;
  address: AddressModel;
  email: string;
  phone: PhoneNumberModel;
  hasCdl: boolean;
  driversLicenseNumber: string | null; // required when hasCdl
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
  consolidatedDocument: string | null; // required when hasConsolidatedDocument

  // Only used when hasConsolidatedDocument is false
  governmentId: string | null;         // require
  bankStatementMonth1: string | null;  // require
  bankStatementMonth2: string | null;  // optional
  bankStatementMonth3: string | null;  // optional

  billOfSale: string | null;           // always required

  specificationSheet: string | null;   // optional
  socialSecurityCard: string | null;   // optional
}

export interface ApplicationReferenceDetail {
  name: string | null;
  address: AddressModel | null;
  phone: PhoneNumberModel | null;
}

export interface ApplicationApiModel {
  id: string;
  applicationNumber: number;
  status: ApplicationStatus;
  timeZone: string;
  source: EntityType;
  basicInfo: ApplicationBasicInfo;
  vehicle: ApplicationVehicleDetail;
  documents: ApplicationDocuments;
  references: ApplicationReferenceDetail[];
  acknowledgement: boolean;
  loanId: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
}
