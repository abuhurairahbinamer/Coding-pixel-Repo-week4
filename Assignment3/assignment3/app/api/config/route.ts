import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    appName: process.env.APP_NAME,
    message: "Environment variable loaded successfully",
  });
}