export enum LedgerEntryType {
  Payment = "payment",
  Fee = "fee",
  Payoff = "payoff",
  WriteOff = "write_off",
  Settlement = "settlement",
  ChargeOff = "charge_off",
  Refund = "refund",

  // Late fee and rescheduling entries
  LateFeeApplied = "late_fee_applied",
  LateFeeWaiver = "late_fee_waiver",
  LateFeeReversal = "late_fee_reversal",
  DueDateChange = "due_date_change",
  LoanModification = "loan_modification",

  // Repossession entries
  Repossession = "repossession",
  VehicleSale = "vehicle_sale",
}
