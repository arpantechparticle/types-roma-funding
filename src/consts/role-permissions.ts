import {PermissionKey} from '../enum/permission-key.enum';
import {Roles} from '../enum/roles.enum';

export const ROLE_PERMISSIONS: Record<Roles, PermissionKey[]> = {
  [Roles.admin]: [PermissionKey.ViewDashboard, PermissionKey.ManageUsers],
  [Roles.manager]: [],
  [Roles.operator]: [],
  [Roles.user]: [],
};
