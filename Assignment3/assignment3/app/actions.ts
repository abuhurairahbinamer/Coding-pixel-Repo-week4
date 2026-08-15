"use server";

import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),
});

export async function submitForm(formData: FormData) {
  const result = schema.safeParse({
    name: formData.get("name"),
  });

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0].message,
    };
  }

  return {
    success: true,
    message: `Hello ${result.data.name}!`,
  };
}