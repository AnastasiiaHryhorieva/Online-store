import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { signUpSchema } from "@/lib/validations/auth";
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

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="m-auto w-full p-6 text-sm shadow-[0_0_50px_0_rgba(0,0,0,0.1)] sm:max-w-[640px] sm:px-[65px] sm:pb-[58px] sm:pt-12">
      <h1 className="mb-8 text-center text-title uppercase">Реєстрація</h1>

      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 inline-block leading-tight">
                    Ім’я*
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                      type="text"
                      placeholder="Ваше ім’я"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 inline-block leading-tight">
                    Призвіще*
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                      type="text"
                      placeholder="Ваше призвіще"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1 text-xs" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 inline-block leading-tight">
                  Введить ваш E-mail*
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    type="email"
                    placeholder="Ваш емейл"
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
              <FormItem className="relative">
                <FormLabel className="mb-2 inline-block leading-tight">
                  Пароль* (повинен бути не менше 6 символів)
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    type="password"
                    placeholder="Введить пароль"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mt-1 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="mb-2 inline-block leading-tight">
                  Підтвердження пароля
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[60px] border-[#B0AAAA] outline-none transition-all placeholder:text-[#AFB1B8] focus:border-black focus:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    type="password"
                    placeholder="******"
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
            Реєстрація
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
          Є аккаунт?{" "}
          <NavLink className="text-[--blue]" to="/sign-in">
            Увійти
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export { SignUp };
