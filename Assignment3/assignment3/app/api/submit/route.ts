import { NextResponse } from "next/server";
import { parseForm } from "@/practice_questions/p6/p6";

export async function POST(request: Request) {
  const formData = await request.formData();

  const result = parseForm(formData);

  if (!result.ok) {
    return NextResponse.json(
      {
        success: false,
        errors: result.errors,
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: `Hello ${result.data.name}! Your submission has been validated successfully.`,
  });
}