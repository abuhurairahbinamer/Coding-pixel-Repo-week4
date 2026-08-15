"use client";

import { useState, useRef } from "react";
import { submitForm, FormState } from "@/app/actions";

export default function Form() {
  const [formState, setFormState] = useState<FormState | null>(null);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setFormState(null);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const result = await submitForm(formData);

    setFormState(result);
    setIsPending(false);

    if (result.success) {
      form.reset();
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border border-gray-300 p-2.5 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
            {/* p1 task deeper */}
          {formState?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.name[0]}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="border border-gray-300 p-2.5 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {/* p1 task deeper */}
          {formState?.errors?.email && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.email[0]}
            </p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="e.g. 21"
            className="border border-gray-300 p-2.5 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
            {/* p1 task deeper */}
          {formState?.errors?.age && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.age[0]}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-4 py-2.5 rounded-md transition duration-150 cursor-pointer"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>

        {/* Success Message */}
        {formState?.success && formState.message && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
            {formState.message}
          </div>
        )}
      </form>
    </div>
  );
}