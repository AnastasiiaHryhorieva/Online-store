import { useForm } from "react-hook-form";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/common/input/input";

const PersonalInformation = () => {
  const personalForm = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      tel: "",
    },
  });

  const addressForm = useForm({
    mode: "onBlur",
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
      <form
        className="mb-[60px]"
        onSubmit={personalForm.handleSubmit(handlePersonalForm)}
      >
        <div className="grid gap-[20px] md:grid-cols-2">
          <Input
            label="Імʼя"
            name="name"
            type="text"
            control={personalForm.control}
            errors={personalForm.formState.errors}
          />
          <Input
            label="Прізвище"
            name="surname"
            type="text"
            control={personalForm.control}
            errors={personalForm.formState.errors}
          />
          <Input
            label="Пошта"
            name="email"
            type="email"
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address.",
              },
            }}
            control={personalForm.control}
            errors={personalForm.formState.errors}
          />
          <Input
            label="Номер телефону"
            name="tel"
            type="tel"
            control={personalForm.control}
            errors={personalForm.formState.errors}
          />
        </div>
        <input
          className={
            buttonVariants({ variant: "outline", size: "lg" }) + " mt-8 w-full"
          }
          type="submit"
          value="Зберегти"
        />
      </form>

      <h2 className="mb-6 text-title">Адреса доставки</h2>
      <form className="" onSubmit={addressForm.handleSubmit(handleAddressForm)}>
        <div className="grid gap-[20px] md:grid-cols-2">
          <Input
            label="Місто"
            name="city"
            type="text"
            control={addressForm.control}
            errors={addressForm.formState.errors}
          />
          <Input
            label="Відділення"
            name="department"
            type="text"
            control={addressForm.control}
            errors={addressForm.formState.errors}
          />
          <Input
            label="Адреса"
            name="address"
            type="text"
            control={addressForm.control}
            errors={addressForm.formState.errors}
          />
          <Input
            label="Будинок"
            name="house"
            type="text"
            control={addressForm.control}
            errors={addressForm.formState.errors}
          />
          <Input
            label="Квартира"
            name="apartment"
            type="text"
            control={addressForm.control}
            errors={addressForm.formState.errors}
          />
        </div>
        <input
          className={
            buttonVariants({ variant: "outline", size: "lg" }) + " mt-8 w-full"
          }
          type="submit"
          value="Зберегти"
        />
      </form>
    </div>
  );
};

export { PersonalInformation };
