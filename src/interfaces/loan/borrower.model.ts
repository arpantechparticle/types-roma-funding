import { EcoaCode } from "../../enum";

export interface BorrowerModel {
  id: string;
  name: string;
  ECOACode: EcoaCode | null;
}
