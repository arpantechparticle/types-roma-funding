import { EngineType } from "../../enum/collateral/engine-type.enum";
import { LicensePlateModel } from "./license-plate.model";
import { LienModel } from "./lien.model";
import { WarrantyModel } from "./warranty.model";
import { carrierComplianceModel } from "./carrier-compliance.model";
import { GpsIntegrationApiModel } from "../api/gps-integration.api.model";
import { GpsIntegrationModel } from "../gps-integration.model";

export interface CollateralModel {
  vin: string;
  year: number;
  make: string;
  model: string;
  trim: string | null;
  miles: number | null;

  additionalInfo: string | null;
  color: string | null;

  isGpsInstalled: boolean;
  gpsCode: string | null;

  //Book value is the estimated market worth of a vehicle (from sources like KBB or NADA) that lenders use to judge loan risk and calculate LTV—not the price the borrower paid.
  bookValue: number | null;
  grossWeightValueNumber: number | null;
  engineType: EngineType | null;

  licensePlate?: LicensePlateModel | null;
  lien?: LienModel | null;
  warranty?: WarrantyModel | null;
  carrierCompliance?: carrierComplianceModel | null;
  gpsIntegrations?: GpsIntegrationModel[];
  gpsIntegrationsIds?: string[];
  notes?: string | null;

  
}
