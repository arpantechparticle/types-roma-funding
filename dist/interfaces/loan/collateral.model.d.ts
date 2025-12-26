export interface CollateralModel {
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
    insuranceProvider: string;
    insurancePolicyNumber: string;
    insuranceCoverageType: string;
    insuranceExpiryDate: Date;
    insuranceVerified: boolean;
    condition: string;
    gpsInstalled: boolean;
    odometerVerified: boolean;
    notes: string;
}
