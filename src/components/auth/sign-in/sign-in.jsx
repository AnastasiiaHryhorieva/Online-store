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
  FormLabel,
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
    <div className="m-auto w-full p-6 text-sm shadow-[0_0_50px_0_rgba(0,0,0,0.1)] sm:max-w-[640px] sm:px-[65px] sm:pb-[58px] sm:pt-12">
      <h1 className="mb-8 text-center text-title uppercase">Вхід</h1>

      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 inline-block leading-tight">
                  Електронна пошта
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    type="email"
                    placeholder="Введить ваш E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-1 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                  <FormLabel className="inline-block leading-tight">
                    Пароль
                  </FormLabel>
                  <NavLink className="text-[--blue]" to="#">
                    Забули пароль?
                  </NavLink>
                </div>
                <FormControl>
                  <Input
                    className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    type="password"
                    placeholder="Введіть пароль"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-1 text-xs" />
              </FormItem>
            )}
          />
          <Button
            className="mt-4 h-[60px] w-full uppercase"
            type="submit"
            variant="outlineReverse"
          >
            Увійти
          </Button>
        </form>
      </Form>

      <div className="mt-10">
        <button
          className="mb-5 flex h-[60px] w-full items-center justify-center gap-4 border border-current duration-200 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          type="button"
        >
          <img
            className="mt-1 h-6"
            src="./img/facebook.png"
            alt="Facebook logo"
          />
          <span className="leading-none">Вхід через Facebook</span>
        </button>
        <button
          className="flex h-[60px] w-full items-center justify-center gap-4 border border-current duration-200 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          type="button"
        >
          <img
            className="mt-1 h-6 w-6"
            src="./img/google.png"
            alt="Google logo"
          />
          <span className="leading-none">Вхід через Google</span>
        </button>

        <p className="mt-8 text-center">
          Вперше на сайті?{" "}
          <NavLink className="text-[--blue]" to="/sign-up">
            Реєстрація
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export { SignIn };
