//p2 task is applied in api/config/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const appName = process.env.APP_NAME;
//deeper
  if (!appName) {
    return NextResponse.json(
      { error: "APP_NAME is missing" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    appName,
  });
}