"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanClosureReason = void 0;
var LoanClosureReason;
(function (LoanClosureReason) {
    LoanClosureReason["PaidInFull"] = "paid_in_full";
    LoanClosureReason["EarlyPayoff"] = "early_payoff";
    LoanClosureReason["Repossession"] = "repossession";
    LoanClosureReason["ChargeOff"] = "charge_off";
    // Settlement = "settlement",
    // Refinanced = "refinanced",
    // VoluntarySurrender = "voluntary_surrender",
    LoanClosureReason["Other"] = "other";
})(LoanClosureReason || (exports.LoanClosureReason = LoanClosureReason = {}));
//# sourceMappingURL=loan-closure-reason.enum.js.map