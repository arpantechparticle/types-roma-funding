import { EntityType } from "../../enum";
import { AddressModel } from "../address.model";
import { CreatedByModel } from "../created-by.model";
import { PhoneNumberModel } from "../phone-number-model";
import { Timestamp } from "../timestamp";

export interface DealerApiModel {
  id: string;
  name: string;
  code?: string | null;
  email?: string | null;
  phone?: PhoneNumberModel | null;

  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
  isDeleted: boolean;
  createdBy: CreatedByModel;
  updatedBy: CreatedByModel;
  deletedBy: CreatedByModel | null;
  source: EntityType;
}
