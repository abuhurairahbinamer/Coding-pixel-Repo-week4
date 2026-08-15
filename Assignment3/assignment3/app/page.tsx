import Form from "@/components/form/Form";
import FormForClient from "@/components/form/FormForClient";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Assignment 3 — Form Submission
        </h1>
        <br />
        <h1>validation through server action</h1>
        <br />
        <Form />
        <br />
        <h1>validation through fecth </h1>
        <br />
        <FormForClient/>
      </div>
    </main>
  );
}
