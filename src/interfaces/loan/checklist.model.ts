export interface LoanChecklist {
  auto: {
    borrowerInfoVerified: boolean;
    collateralDetailsComplete: boolean;
    insurancePolicyActive: boolean;
    gpsInstalled: boolean;
    titleReceived: boolean;
    paymentMethodConfigured: boolean;
    underwritingDocsComplete: boolean;
    collateralFundingVerified: boolean;
  }
  
  underwriting: {
    verifiedResidence: boolean;
    verifiedReferences: boolean;
    verifiedIncome: boolean;
  };

  operations: {
    profileUpdated: boolean;
  };

  paidOff: {
    accountClosure: boolean;
    lienRelease: boolean;
    gpsUninstalled: boolean;
    titleReleasedToBorrower: boolean;
  };

  repossession: {
    salesTaxRefundApplied: boolean;
    vehicleSold: boolean;
    warrantyCancellation: boolean;
    gapCancellation: boolean;
    repossessionStatement: boolean;
  };

  specialAccountStatus: {
    accidentIndicator: boolean;
    paymentPlanAccepted: boolean;
    insuranceClaimPending: boolean;
  };

  audits: {
    titleELT: boolean;
    finalAudit: boolean;
  };
}
