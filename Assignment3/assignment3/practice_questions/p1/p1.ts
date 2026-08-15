import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.coerce          // deeper p6 task
    .number()
    .int("Age must be an integer")
    .min(18, "Age must be 18 or above"),
});

const result1 = schema.safeParse({
  name: "",
  email: "x",
  age: 10
});

if(result1.success){
    console.log("p1 task done with deeper : Result1 Passed")
} 
else{
    console.log("p1 task done with deeper : Result1 failed.  Errors are :",result1.error.issues)
}


const result2 = schema.safeParse({
  name: "Abu",
  email: "abu@gmail.com",
  age: 20
});

if(result2.success){
    console.log("p1 task done with deeper : Result2 Passed")
} 
else{
    console.log("p1 task done with deeper : Result2 failed. Errors are :",result2.error.issues)
}
