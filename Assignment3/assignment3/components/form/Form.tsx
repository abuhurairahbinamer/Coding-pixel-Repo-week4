"use client";

import { useState } from "react";
import { submitForm } from "../../app/actions";

export default function Form() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(formData: FormData) {
    const result = await submitForm(formData);

    if (result.success) {
      setMessage(result.message || "");
      setIsError(false);
    } else {
      setMessage(result.error || "");
      setIsError(true);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="border p-2 w-full rounded"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {message && (
        <p className={isError ? "text-red-500" : "text-green-500"}>
          {message}
        </p>
      )}
    </form>
  );
}