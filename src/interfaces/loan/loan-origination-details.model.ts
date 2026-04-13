export interface LoanOriginationDetailsModel {
  salesPrice: number;
  netAmountDown: number | null;
  taxes: number | null;
  gapInsurance: number | null;
  warranty: number | null;
  dealerProfit: number | null;
  reserveAmount: number | null;
  feeBreakdown: FeeBreakdownModel;
}

export interface FeeBreakdownModel {
  closingFees: number; // $1250
  technologyFee: number; // $750
  collateralReviewFee: number; // $1100
  underwritingFee: number; // $900
}
