import { notFound } from "next/navigation";
import { GenericModulePage } from "@/components/module-pages";
const supported=["sales","finance","marketing","automations","knowledge","reports","settings","billing","admin"];
export default async function Page({params}:{params:Promise<{module:string}>}){const {module}=await params;if(!supported.includes(module))notFound();return <GenericModulePage module={module}/>}
