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
    closingFees: number;
    technologyFee: number;
    collateralReviewFee: number;
    underwritingFee: number;
}
