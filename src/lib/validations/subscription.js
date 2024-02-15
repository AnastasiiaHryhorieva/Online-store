import * as z from "zod";

const subscriptionSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export { subscriptionSchema };
