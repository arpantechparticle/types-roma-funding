"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_PERMISSIONS = void 0;
const permission_key_enum_1 = require("../enum/permission-key.enum");
const roles_enum_1 = require("../enum/roles.enum");
exports.ROLE_PERMISSIONS = {
    [roles_enum_1.Roles.admin]: [permission_key_enum_1.PermissionKey.ViewDashboard, permission_key_enum_1.PermissionKey.ManageUsers],
    [roles_enum_1.Roles.manager]: [],
    [roles_enum_1.Roles.operator]: [],
    [roles_enum_1.Roles.user]: [],
};
//# sourceMappingURL=role-permissions.js.map