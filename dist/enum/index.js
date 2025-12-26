"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineType = exports.TitleStatus = exports.LienStatus = exports.LicensePlateStatus = exports.LoanProgramType = exports.LoanType = exports.ServicingStatus = exports.PaymentFrequency = exports.InterestType = exports.LoanStatus = exports.EmploymentStatus = exports.BorrowerType = exports.Roles = exports.TaxIdType = exports.IRSBusinessEntityType = exports.EntityType = exports.Collection = void 0;
// Export all enums here
var firestore_collections_enum_1 = require("./firestore-collections.enum");
Object.defineProperty(exports, "Collection", { enumerable: true, get: function () { return firestore_collections_enum_1.Collection; } });
var entity_type_enum_1 = require("./entity-type.enum");
Object.defineProperty(exports, "EntityType", { enumerable: true, get: function () { return entity_type_enum_1.EntityType; } });
var irs_business_entity_type_enum_1 = require("./irs-business-entity-type.enum");
Object.defineProperty(exports, "IRSBusinessEntityType", { enumerable: true, get: function () { return irs_business_entity_type_enum_1.IRSBusinessEntityType; } });
var tax_id_type_enum_1 = require("./tax-id-type.enum");
Object.defineProperty(exports, "TaxIdType", { enumerable: true, get: function () { return tax_id_type_enum_1.TaxIdType; } });
var roles_enum_1 = require("./roles.enum");
Object.defineProperty(exports, "Roles", { enumerable: true, get: function () { return roles_enum_1.Roles; } });
var borrower_type_enum_1 = require("./borrower-type.enum");
Object.defineProperty(exports, "BorrowerType", { enumerable: true, get: function () { return borrower_type_enum_1.BorrowerType; } });
var employment_status_enum_1 = require("./employment-status.enum");
Object.defineProperty(exports, "EmploymentStatus", { enumerable: true, get: function () { return employment_status_enum_1.EmploymentStatus; } });
//Loan
var loan_status_enum_1 = require("./loan/loan-status.enum");
Object.defineProperty(exports, "LoanStatus", { enumerable: true, get: function () { return loan_status_enum_1.LoanStatus; } });
var interest_type_enum_1 = require("./loan/interest-type.enum");
Object.defineProperty(exports, "InterestType", { enumerable: true, get: function () { return interest_type_enum_1.InterestType; } });
var payment_frequency_enum_1 = require("./loan/payment-frequency.enum");
Object.defineProperty(exports, "PaymentFrequency", { enumerable: true, get: function () { return payment_frequency_enum_1.PaymentFrequency; } });
var servicing_status_enum_1 = require("./loan/servicing-status.enum");
Object.defineProperty(exports, "ServicingStatus", { enumerable: true, get: function () { return servicing_status_enum_1.ServicingStatus; } });
var loan_type_enum_1 = require("./loan/loan-type.enum");
Object.defineProperty(exports, "LoanType", { enumerable: true, get: function () { return loan_type_enum_1.LoanType; } });
var loan_program_type_enum_1 = require("./loan/loan-program-type.enum");
Object.defineProperty(exports, "LoanProgramType", { enumerable: true, get: function () { return loan_program_type_enum_1.LoanProgramType; } });
//Collateral
var license_plate_status_enum_1 = require("./collateral/license-plate-status.enum");
Object.defineProperty(exports, "LicensePlateStatus", { enumerable: true, get: function () { return license_plate_status_enum_1.LicensePlateStatus; } });
var lien_status_enum_1 = require("./collateral/lien-status.enum");
Object.defineProperty(exports, "LienStatus", { enumerable: true, get: function () { return lien_status_enum_1.LienStatus; } });
var title_status_enum_1 = require("./collateral/title-status.enum");
Object.defineProperty(exports, "TitleStatus", { enumerable: true, get: function () { return title_status_enum_1.TitleStatus; } });
var engine_type_enum_1 = require("./collateral/engine-type.enum");
Object.defineProperty(exports, "EngineType", { enumerable: true, get: function () { return engine_type_enum_1.EngineType; } });
//# sourceMappingURL=index.js.map