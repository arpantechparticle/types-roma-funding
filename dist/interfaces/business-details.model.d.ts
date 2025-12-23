import { IRSBusinessEntityType, TaxIdType } from "../enum";
import { AddressModel } from "./address.model";
import { PhoneNumberModel } from "./phone-number-model";
export interface BusinessDetailsModel {
    name: string;
    doingBusinessAs: string | null;
    typeOfBusiness: IRSBusinessEntityType;
    taxIdType: TaxIdType;
    taxIdLast4: string | null;
    email: string;
    phone: PhoneNumberModel;
    fax: PhoneNumberModel | null;
    yearsInBusiness: number | null;
    grossAnnualSales: number | null;
    address: AddressModel;
}
