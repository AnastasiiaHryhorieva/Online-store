import * as z from "zod";

const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(6, {
      message: "Пароль повинен бути не менш 6 символів",
    })
    .max(100),
});

const signUpSchema = z
  .object({
    name: z.string().min(1, "Введіть ваше ім’я"),
    surname: z.string().min(1, "Введіть ваше призвіще"),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z
      .string()
      .min(6, {
        message: "Пароль повинен бути не менш 6 символів",
      })
      .max(100),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Пароль повинен бути не менш 6 символів",
      })
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match!",
    path: ["confirmPassword"],
  });

export { signInSchema, signUpSchema };
