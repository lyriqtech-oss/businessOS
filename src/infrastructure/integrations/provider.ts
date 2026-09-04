import type { IntegrationProvider } from "@/domain/types";
export class MockIntegrationProvider implements IntegrationProvider { constructor(public key:string,public name:string,public category:string){} async connect(){return {ok:true,simulated:true}} async test(){return {ok:true,message:"Provider mock respondeu corretamente"}} async disconnect(){} }
