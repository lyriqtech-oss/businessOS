import { describe, expect, it } from "vitest";
import { can } from "./permissions";
describe("RBAC",()=>{it("impede exclusão por visualizador",()=>expect(can("viewer","delete")).toBe(false));it("permite aprovação por gestor",()=>expect(can("manager","approve")).toBe(true));it("reserva administração ao nível correto",()=>{expect(can("owner","admin")).toBe(true);expect(can("sales","admin")).toBe(false)})});
