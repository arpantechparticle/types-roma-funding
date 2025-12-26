export interface CollateralModel {
  vin: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  bodyType: string | null;
  mileage: number;

  // Purchase & value
  purchasePrice: number;
  downPayment: number;
  financedAmount: number;
  estimatedValue: number;
  ltvRatio: number;

  // Title & lien
  titleNumber: string;
  titleState: string;
  lienPosition: number;
  lienHolderName: string;
  titleStatus: string;
  titleRecordedAt: Date;

  // Insurance
  insuranceProvider: string;
  insurancePolicyNumber: string;
  insuranceCoverageType: string;
  insuranceExpiryDate: Date;
  insuranceVerified: boolean;

  // Risk & tracking
  condition: string;
  gpsInstalled: boolean;
  odometerVerified: boolean;
  notes: string;
}

