import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { AddressModel } from '../address.model';
import { EntityType } from '../../enum';
import { CountryModel } from '../country.model';
import { PhoneNumberModel } from "../phone-number-model";
export interface UserApiModel {
    id: string;
    userId: string;
    email: string;
    country: CountryModel;
    phoneNumber: PhoneNumberModel;
    photoURL: string | null;
    displayName?: string;
    firstName: string;
    lastName?: string;
    gender: string;
    color: string;
    emailVerified: boolean;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    source: EntityType;
    roles?: {
        title: string;
        value: string;
        id: string;
    };
    address?: AddressModel;
}
