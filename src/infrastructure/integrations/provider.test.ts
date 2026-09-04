import { describe, expect, it } from "vitest";
import { MockIntegrationProvider } from "./provider";
describe("MockIntegrationProvider",()=>{it("declara explicitamente que a conexão é simulada",async()=>{const result=await new MockIntegrationProvider("stripe","Stripe","payment").connect();expect(result).toEqual({ok:true,simulated:true})})});
