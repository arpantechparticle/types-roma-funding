"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntryType = void 0;
var LedgerEntryType;
(function (LedgerEntryType) {
    LedgerEntryType["Payment"] = "payment";
    LedgerEntryType["LateFee"] = "late_fee";
    LedgerEntryType["NsfFee"] = "nsf_fee";
    LedgerEntryType["RepossessionFee"] = "repossession_fee";
    LedgerEntryType["LateFeeWaived"] = "late_fee_waived";
    LedgerEntryType["NsfFeeWaived"] = "nsf_fee_waived";
    LedgerEntryType["RepossessionFeeWaived"] = "repossession_fee_waived";
    LedgerEntryType["StartLoan"] = "start_loan";
    LedgerEntryType["Payoff"] = "payoff";
    LedgerEntryType["VehicleSale"] = "vehicle_sale";
    LedgerEntryType["ChargeOff"] = "charge_off";
})(LedgerEntryType || (exports.LedgerEntryType = LedgerEntryType = {}));
//# sourceMappingURL=ledger-entry-type.enum.js.map