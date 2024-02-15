import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { subscriptionSchema } from "@/lib/validations/subscription";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Subscription = () => {
  const form = useForm({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="py-12">
      <div className="container grid gap-4 max-md:justify-center md:grid-cols-2">
        <p className="max-w-[430px] text-base uppercase max-md:text-center">
          Підпишись на розсилку та отримай 10% знижки на наступне замовлення
        </p>
        <Form {...form}>
          <form
            className="ml-auto flex w-full max-w-[560px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormControl>
                    <Input
                      className="h-[50px] border-r-0 outline-none"
                      type="email"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-xs leading-none" />
                </FormItem>
              )}
            />
            <Button
              className="px-8 text-[20px]"
              type="submit"
              variant="outlineReverse"
            >
              Підписатися
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export { Subscription };
