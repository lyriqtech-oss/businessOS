import { NextResponse } from "next/server";
export function GET(){return NextResponse.json({status:"ok",service:"lyriq-business-os",timestamp:new Date().toISOString()})}
