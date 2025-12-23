import { EntityType } from "../../enum";
import { CreatedByModel } from "../created-by.model";
import { Timestamp } from "../timestamp";
export interface VehicleApiModel {
    id: string;
    vin: string;
    year: number;
    make: string;
    model: string;
    trim: string;
    bodyType: string | null;
    mileage: number;
    purchasePrice: number;
    downPayment: number;
    financedAmount: number;
    estimatedValue: number;
    ltvRatio: number;
    titleNumber: string;
    titleState: string;
    lienPosition: number;
    lienHolderName: string;
    titleStatus: string;
    titleRecordedAt: Date;
    insurance: VehicleInsuranceModel;
    condition: string;
    gpsInstalled: boolean;
    odometerVerified: boolean;
    notes: string;
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
export interface VehicleInsuranceModel {
    provider: string;
    policyNumber: string;
    coverageType: string;
    expiryDate: Date;
    verified: boolean;
}
