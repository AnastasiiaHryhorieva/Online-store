import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { addressSchema, personalInfoSchema } from "@/lib/validations/account";
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

const PersonalInformation = () => {
  const personalForm = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      tel: "",
    },
  });

  const addressForm = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      city: "",
      department: "",
      address: "",
      house: "",
      apartment: "",
    },
  });

  const handlePersonalForm = (data) => {
    console.log(data);
  };

  const handleAddressForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="mb-6 text-title">Особисті дані</h2>
      <Form {...personalForm}>
        <form
          className="mb-[60px]"
          onSubmit={personalForm.handleSubmit(handlePersonalForm)}
        >
          <div className="grid gap-[20px] md:grid-cols-2">
            <FormField
              control={personalForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Імʼя
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={personalForm.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Прізвище
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={personalForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Пошта
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={personalForm.control}
              name="tel"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Номер телефону
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="mt-8 w-full"
            type="submit"
            size="lg"
            variant="outline"
          >
            Зберегти
          </Button>
        </form>
      </Form>

      <h2 className="mb-6 text-title">Адреса доставки</h2>
      <Form {...addressForm}>
        <form
          className="mb-[60px]"
          onSubmit={addressForm.handleSubmit(handleAddressForm)}
        >
          <div className="grid gap-[20px] md:grid-cols-2">
            <FormField
              control={addressForm.control}
              name="city"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Місто
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="department"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Відділення
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="address"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Адреса
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="house"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Будинок
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="apartment"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="pointer-events-none absolute left-4 top-2 text-xs leading-none text-black/60">
                    Квартира
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px] w-full border-[#f4f4f4] bg-[#f4f4f4] px-4 pb-3 pt-[25px]"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute left-0 top-full text-sm leading-none" />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="mt-8 w-full"
            type="submit"
            size="lg"
            variant="outline"
          >
            Зберегти
          </Button>
        </form>
      </Form>
    </div>
  );
};

export { PersonalInformation };
