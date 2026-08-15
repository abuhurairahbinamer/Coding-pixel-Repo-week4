// p7 task is already applied in components/from/FormForClient.tsx. the purpose of making the file is for convenience

"use client";

import { useState, useRef } from "react";
import {  FormState } from "@/app/actions";
import { Result } from "@/practice_questions/p4/p4";

export default function FormForClient() {
 
  const [formResult, setFormResult] = useState<Result>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FormState["errors"]>(undefined);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  setFormResult({ status: "submitting" });
  setFieldErrors(undefined);
  setSuccessMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      setFormResult({
        status: "error",
        message: "Validation failed",
      });

      setFieldErrors(result.errors);
      return;
    }

    setFormResult({ status: "success" });
    setSuccessMessage(
      result.message || "Form submitted successfully!"
    );

    form.reset();
  } catch (error) {
    setFormResult({
      status: "error",
      message: "Something went wrong. Please try again.",
    });
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
          
          {fieldErrors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {fieldErrors.name[0]}
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
         
          {fieldErrors?.email && (
            <p className="text-red-500 text-sm mt-1">
              {fieldErrors.email[0]}
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
         
          {fieldErrors?.age && (
            <p className="text-red-500 text-sm mt-1">
              {fieldErrors.age[0]}
            </p>
          )}
        </div>

       
        <button
          type="submit"
          disabled={formResult.status === "submitting"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-4 py-2.5 rounded-md transition duration-150 cursor-pointer flex items-center justify-center gap-2"
        >
          {formResult.status === "submitting" ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>

        {formResult.status === "error" && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
            {formResult.message}
          </div>
        )}

       
        {formResult.status === "success" && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}