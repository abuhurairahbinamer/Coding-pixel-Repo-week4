import { schema } from "../p1/p1";
export function parseForm(formData: FormData) {
  // Convert FormData into a normal object
  const rawData = Object.fromEntries(formData);

  // Validate the data
  const result = schema.safeParse(rawData);

  if (!result.success) {
    return {
      ok: false as const,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    ok: true as const,
    data: result.data,
  };
}

//deeper 
// we would  coerce types in schema not before parsing