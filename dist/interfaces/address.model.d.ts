export interface AddressModel {
    addressLine1: string;
    addressLine2: string | null;
    state: string;
    street: string;
    country: string;
    postalCode: string;
    city: string;
    location: any;
    formattedAddress?: string;
    landmark?: string | null;
    placeId?: string | null;
}
