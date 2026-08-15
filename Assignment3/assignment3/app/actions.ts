"use server";

import { schema } from "@/practice_questions/p1/p1";

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
  const name = formData.get("name");
  const email = formData.get("email");
  const ageRaw = formData.get("age");

  const ageNumber = ageRaw !== null && ageRaw !== "" ? Number(ageRaw) : undefined;

  const result = schema.safeParse({
    name: typeof name === "string" ? name : "",
    email: typeof email === "string" ? email : "",
    age: ageNumber,
  });

  if (!result.success) {
    const flattened = result.error.flatten().fieldErrors;
    return {
      success: false,
      errors: {
        name: flattened.name,
        email: flattened.email,
        age: flattened.age,
      },
    };
  }

  return {
    success: true,
    message: `Hello ${result.data.name}! Your submission has been validated successfully.`,
  };
}