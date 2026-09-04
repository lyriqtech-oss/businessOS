export type Role = "owner" | "admin" | "manager" | "sales" | "support" | "finance" | "marketing" | "analyst" | "viewer";
export type PermissionAction = "view" | "create" | "edit" | "delete" | "export" | "approve" | "admin";
export type ModuleKey = "overview" | "inbox" | "crm" | "sales" | "calendar" | "finance" | "marketing" | "automations" | "agents" | "knowledge" | "reports" | "integrations" | "team" | "settings" | "billing" | "admin";
export interface TenantContext { organizationId: string; role: Role; permissions: Record<string, PermissionAction[]>; }
export interface Deal { id: string; title: string; contact: string; company: string; owner: string; value: number; probability: number; stage: string; source: string; product: string; expectedClose: string; lastInteraction: string; nextAction: string; }
export interface IntegrationProvider { key: string; name: string; category: string; connect(): Promise<{ ok: boolean; simulated: boolean }>; test(): Promise<{ ok: boolean; message: string }>; disconnect(): Promise<void>; }
