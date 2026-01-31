import { EmploymentStatus } from "../enum";
import { AddressModel } from "./address.model";
import { PhoneNumberModel } from "./phone-number-model";
import { Timestamp } from "./timestamp";
export interface PersionDetailsModel {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Timestamp;
    gender: string;
    ssnLast4: string | null;
    isUsCitizen: boolean;
    license: LicenseModel;
    email: string;
    secondaryEmail: string;
    primaryPhone: PhoneNumberModel;
    secondaryPhone: PhoneNumberModel | null;
    primaryAddress: AddressModel;
    mailingAddress: AddressModel;
    homeDetails: HomeDetailsModel;
    employment: EmploymentInfo;
    grossAnnualIncome: number | null;
    additionalIncome: number | null;
    sourceOfAdditionalIncome: string | null;
}
export interface LicenseModel {
    number: string;
    state: string;
    expiryDate: Date;
}
export interface HomeDetailsModel {
    ownHome: boolean;
    monthlyMortgageAmount: number | null;
    currentMortgageBalance: number | null;
    currentMarketValue: number | null;
    lenderName: string | null;
    yearsThere: number | null;
    priorAddress: AddressModel | null;
    address: AddressModel;
    landmark: string | null;
}
export interface EmploymentInfo {
    status: EmploymentStatus;
    currentEmployer: string;
    currentEmployerPhone: PhoneNumberModel | null;
    currentPosition: string;
    currentEmploymentYearsThere: number | null;
    currentEmploymentStart: Timestamp | null;
    currentEmploymentEnd: Timestamp | null;
    priorEmployer: string | null;
    priorEmployerPhone: PhoneNumberModel | null;
    priorPosition: string | null;
    priorEmploymentYearsThere: number | null;
    priorEmploymentStart: Timestamp | null;
    priorEmploymentEnd: Timestamp | null;
}
