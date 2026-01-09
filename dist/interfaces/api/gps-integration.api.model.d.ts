import { Timestamp } from "../timestamp";
import { CreatedByModel } from "../created-by.model";
export interface GpsIntegrationApiModel {
    id: string;
    url: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    deletedAt: Timestamp | null;
    isDeleted: boolean;
    createdBy: CreatedByModel;
    updatedBy: CreatedByModel;
    deletedBy: CreatedByModel;
    source: string;
}
