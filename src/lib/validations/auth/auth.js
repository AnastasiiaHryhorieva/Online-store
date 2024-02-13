import * as z from "zod";

const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100),
});

const signUpSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .max(100),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match!",
    path: ["confirmPassword"],
  });

export { signInSchema, signUpSchema };
