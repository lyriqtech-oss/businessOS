import type { PermissionAction, Role } from "@/domain/types";
const matrix: Record<Role, PermissionAction[]>={owner:["view","create","edit","delete","export","approve","admin"],admin:["view","create","edit","delete","export","approve","admin"],manager:["view","create","edit","export","approve"],sales:["view","create","edit","export"],support:["view","create","edit"],finance:["view","create","edit","export","approve"],marketing:["view","create","edit","export","approve"],analyst:["view","export"],viewer:["view"]};
export function can(role:Role,action:PermissionAction){return matrix[role].includes(action)}
export function assertPermission(role:Role,action:PermissionAction){if(!can(role,action))throw new Error("Acesso negado")}
