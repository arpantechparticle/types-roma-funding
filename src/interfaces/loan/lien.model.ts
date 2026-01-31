import { Timestamp } from "../timestamp";
import { LienStatus } from "../../enum/collateral/lien-status.enum";

export interface LienModel {
  holderId: string | null; // lender id
  holderName: string | null; // lender name
  position: number | null;
  status: LienStatus | null;
  issueDate: Timestamp | null;
  releaseDate: Timestamp | null;
  documentId: string | null;
}
