import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
import { EntityType } from "../../enum";
import { PromiseType } from "../../enum/loan/promise-type.enum";
export interface PromiseApiModel {
    id: string;
    subject: string;
    type: PromiseType;
    dueDate: Timestamp;
    note: string;
    fulfillmentDate: Timestamp | null;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel | null;
    timeZone: string;
    source: EntityType;
}
