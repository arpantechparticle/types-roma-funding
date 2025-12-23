import { BorrowerType, EntityType } from "../../enum";
import { BusinessDetailsModel } from "../business-details.model";
import { CreatedByModel } from "../created-by.model";
import { PersionDetailsModel } from "../persion-details.model";
import { Timestamp } from "../timestamp";


export interface BorrowerApiModel {
  id: string;
  type: BorrowerType;

  individual: (PersionDetailsModel & { id: string }) | null;
  business: BusinessDetailsModel | null;

  personIds: string[];

  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel;
  timeZone: string;
  source: EntityType;
}
