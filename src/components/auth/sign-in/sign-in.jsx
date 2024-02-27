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
    <div className="m-auto w-full p-6 text-[18px] font-semibold shadow-[0_0_50px_0_rgba(0,0,0,0.1)] sm:max-w-[640px] sm:px-[65px] sm:pb-[58px] sm:pt-12">
      <h1 className="mb-8 text-center text-[24px] uppercase">Вхід</h1>

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
                <FormLabel className="mb-1.5 inline-block text-base leading-tight">
                  Електронна пошта
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[56px] border-[#B0AAAA] text-[20px] placeholder:text-[#AFB1B8]"
                    type="email"
                    placeholder="Введить ваш E-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[18px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-3">
                  <FormLabel className="inline-block text-base leading-tight">
                    Пароль
                  </FormLabel>
                  <NavLink className="text-[--blue]" to="#">
                    Забули пароль?
                  </NavLink>
                </div>
                <FormControl>
                  <Input
                    className="h-[56px] border-[#B0AAAA] text-[20px] placeholder:text-[#AFB1B8]"
                    type="password"
                    placeholder="Введіть пароль"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-[18px]" />
              </FormItem>
            )}
          />
          <Button
            className="mt-4 h-[64px] w-full text-[24px]"
            type="submit"
            variant="outlineReverse"
          >
            Увійти
          </Button>
        </form>
      </Form>

      <div className="mt-10">
        <button
          className="mb-5 flex h-[64px] w-full items-center justify-center gap-4 border-2 border-current text-[24px] text-[--blue]"
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
          className="flex h-[64px] w-full items-center justify-center gap-4 border-2 border-current text-[24px]"
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
          Вперше на сайті?
          <NavLink className="ml-2.5 font-bold text-[--blue]" to="/sign-up">
            Реєстрація
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export { SignIn };
