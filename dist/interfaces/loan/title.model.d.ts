import { TitleStatus } from "../../enum/collateral/title-status.enum";
export interface TitleModel {
    number: string;
    state: string;
    controlNumber: string;
    status: TitleStatus | null;
}
