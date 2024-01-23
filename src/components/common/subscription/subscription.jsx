import { useForm } from "react-hook-form";

// TODO: create input component with react-hook-form
const Subscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subscription: "",
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
        <form
          className="ml-auto flex w-full max-w-[560px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <input
              className="h-[50px] w-full border border-r-0 px-6 py-3 outline-none duration-200 hover:border-black focus-visible:border-black"
              placeholder="example@gmail.com"
              {...register("subscription", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.subscription && (
              <span className="absolute left-0 top-full text-xs leading-none text-[red]">
                {errors.subscription.message}
              </span>
            )}
          </div>
          <input className="button" type="submit" value="Підписатися" />
        </form>
      </div>
    </section>
  );
};

export { Subscription };
