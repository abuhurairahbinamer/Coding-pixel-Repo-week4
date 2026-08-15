// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     appName: process.env.APP_NAME,
//     message: "Environment variable loaded successfully",
//   });
// }


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