"use server";

import { schema } from "@/practice_questions/p1/p1";
import { parseForm } from "@/practice_questions/p6/p6";
export type FormState = {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    age?: string[];
  };
};




export async function submitForm(formData: FormData): Promise<FormState> {
  // const name = formData.get("name");
  // const email = formData.get("email");
  // const ageRaw = formData.get("age");

  // const ageNumber = ageRaw !== null && ageRaw !== "" ? Number(ageRaw) : undefined;
  const result = parseForm(formData);

  if (!result.ok) {
    return {
      success: false,
      errors: {
        name: result.errors.name,
        email: result.errors.email,
        age: result.errors.age,
      },
    };
  }

  return {
    success: true,
    message: `Hello ${result.data.name}! Your submission has been validated successfully.`,
  };


}