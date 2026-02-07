import { BorrowerType, EntityType, IRSBusinessEntityType } from "../../enum";
import { AddressModel } from "../address.model";
import { CreatedByModel } from "../created-by.model";
import { PhoneNumberModel } from "../phone-number-model";
import { Timestamp } from "../timestamp";
export interface BorrowerApiModel {
    id: string;
    type: BorrowerType;
    fullName: string;
    ein: string;
    ssn: string;
    primaryPhone: PhoneNumberModel;
    secondaryPhone: PhoneNumberModel | null;
    primaryEmail: string;
    secondaryEmail: string | null;
    primaryAddress: AddressModel;
    mailingAddress: AddressModel;
    loanIds: string[];
    businessName: string | null;
    typeOfBusiness: IRSBusinessEntityType | null;
    fax: PhoneNumberModel | null;
    businessPrimaryContact: BusinessPrimaryContactModel | null;
    isDeleted: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    timeZone: string;
    source: EntityType;
}
export interface BusinessPrimaryContactModel {
    firstName: string;
    middleName: string;
    lastName: string;
    socialSecurityNumber: string;
    ssnLast4: string;
}
