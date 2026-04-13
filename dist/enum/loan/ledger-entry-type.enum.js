"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntryType = void 0;
var LedgerEntryType;
(function (LedgerEntryType) {
    LedgerEntryType["Payment"] = "payment";
    LedgerEntryType["Fee"] = "fee";
    LedgerEntryType["Payoff"] = "payoff";
    LedgerEntryType["WriteOff"] = "write_off";
    LedgerEntryType["Settlement"] = "settlement";
    LedgerEntryType["ChargeOff"] = "charge_off";
    LedgerEntryType["Refund"] = "refund";
    // Late fee and rescheduling entries
    LedgerEntryType["LateFeeApplied"] = "late_fee_applied";
    LedgerEntryType["LateFeeWaiver"] = "late_fee_waiver";
    LedgerEntryType["LateFeeReversal"] = "late_fee_reversal";
    LedgerEntryType["DueDateChange"] = "due_date_change";
    LedgerEntryType["LoanModification"] = "loan_modification";
    // Repossession entries
    LedgerEntryType["Repossession"] = "repossession";
    LedgerEntryType["VehicleSale"] = "vehicle_sale";
})(LedgerEntryType || (exports.LedgerEntryType = LedgerEntryType = {}));
//# sourceMappingURL=ledger-entry-type.enum.js.map