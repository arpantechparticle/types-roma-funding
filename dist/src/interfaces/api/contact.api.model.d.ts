import { EntityType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { PhoneNumberModel } from "../phone-number-model";
import { Timestamp } from "../timestamp";
export interface ContactApiModel {
    name: string;
    email: string;
    phone: PhoneNumberModel | null;
    subject: string | null;
    message: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    deletedBy: CreatedByModel;
    source: EntityType;
    timeZone: string;
}
