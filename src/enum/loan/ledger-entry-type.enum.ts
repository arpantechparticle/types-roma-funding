export enum LedgerEntryType {
  Payment = "payment",

  LateFee = "late_fee",
  NsfFee = "nsf_fee",
  RepossessionFee = "repossession_fee",

  LateFeeWaived = "late_fee_waived",
  NsfFeeWaived = "nsf_fee_waived",
  RepossessionFeeWaived = "repossession_fee_waived",

  StartLoan = "start_loan",
  Payoff = "payoff",
  VehicleSale = "vehicle_sale",
  ChargeOff = "charge_off",
}
