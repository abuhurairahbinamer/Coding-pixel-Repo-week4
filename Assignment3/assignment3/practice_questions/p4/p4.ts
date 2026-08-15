// P4: Model the form's result as a discriminated union
export type Result =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

/**
 * What renders in each state:
 * 1. "idle":
 *    - The default form ready for user input (no messages, active submit button).
 *
 * 2. "submitting":
 *    - A loading spinner icon and disabled submit button ("Submitting...").
 *
 * 3. "success":
 *    - A visible confirmation banner confirming successful submission.
 *
 * 4. "error":
 *    - The error message (e.g. red banner or text) explaining the validation failure.
 */