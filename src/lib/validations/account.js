import * as z from "zod";

const personalInfoSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  tel: z.string(),
});

const addressSchema = z.object({
  city: z.string(),
  department: z.string(),
  address: z.string(),
  house: z.string(),
  apartment: z.string(),
});

export { personalInfoSchema, addressSchema };
