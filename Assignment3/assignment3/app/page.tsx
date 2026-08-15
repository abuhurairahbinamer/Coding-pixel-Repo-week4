import Image from "next/image";
import Form from "@/components/form/Form";
export default function Home() {
  return (
    <>
     <div className="max-w-md mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-4">
            Assignment 3 Form
          </h1>
          <Form/>
        </div>
    </>
  );
}
