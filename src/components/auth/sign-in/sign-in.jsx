import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signInSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SignIn = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="m-auto w-full p-6 pb-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] sm:max-w-[400px]">
      <h1 className="mb-5 text-title">Вхід</h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-[50px]"
                    type="email"
                    placeholder="Електронна пошта"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-[50px] rounded-none border border-black px-4"
                    type="password"
                    placeholder="Пароль"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-5 w-full"
            type="submit"
            variant="outlineReverse"
          >
            Увійти
          </Button>
        </form>
      </Form>
      <p className="mt-5 text-muted-foreground">
        Немає акаунта?{" "}
        <NavLink className="font-semibold text-black" to="/sign-up">
          Зареєструватися
        </NavLink>
      </p>
    </div>
  );
};

export { SignIn };
