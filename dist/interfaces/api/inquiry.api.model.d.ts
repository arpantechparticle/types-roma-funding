import { EntityType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface InquiryApiModel {
    id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    status: 'new' | 'in-progress' | 'resolved' | 'closed';
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    companyLogo?: string;
    deletedBy: CreatedByModel;
    source: EntityType;
    timeZone: string;
}
