import { useState } from "react";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { signUpSchema } from "@/lib/validations/auth/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="m-auto flex w-full flex-col p-6 pb-8 shadow-[0_0_50px_0_rgba(0,0,0,0.1)] sm:max-w-[400px]">
      <h1 className="mb-5 text-title">Реєстрація</h1>

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
              <FormItem className="relative">
                <FormControl>
                  <>
                    <Input
                      className="h-[50px] rounded-none border border-black px-4"
                      type={showPassword ? "text" : "password"}
                      placeholder="Пароль"
                      {...field}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-current"
                      type="button"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <EyeOffIcon aria-label="Сховати пароль" />
                      ) : (
                        <EyeIcon aria-label="Показати пароль" />
                      )}
                    </button>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <>
                    <Input
                      className="h-[50px] rounded-none border border-black px-4"
                      type={showPassword ? "text" : "password"}
                      placeholder="Підтвердити пароль"
                      {...field}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-current"
                      type="button"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <EyeOffIcon aria-label="Сховати пароль" />
                      ) : (
                        <EyeIcon aria-label="Показати пароль" />
                      )}
                    </button>
                  </>
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
            Зареєструватися
          </Button>
        </form>
      </Form>
      <p className="mt-5 text-muted-foreground">
        Вже є акаунт?{" "}
        <NavLink className="font-semibold text-black" to="/sign-in">
          Увійти
        </NavLink>
      </p>
    </div>
  );
};

export { SignUp };
