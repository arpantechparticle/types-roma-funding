export interface PhoneNumberModel {
    number: NumberModel;
    regionCode: string;
    countryCode: number,
    valid: boolean;
    possible: boolean;
    canBeInternationallyDialled: boolean;
    type: string;
    typeIsFixedLine: boolean;
    typeIsMobile: boolean;
    possibility: string;
}

export interface NumberModel {
    input: string;
    international: string;
    national: string;
    e164: string;
    rfc3966: string;
    significant: string;
}
