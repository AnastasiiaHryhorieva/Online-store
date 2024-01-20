import { useForm } from "react-hook-form";

const Subscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="ml-[150px] mr-[150px]">
      <div className="flex-around mb-12 flex-wrap">
        <p className="text-18 max-w-[420px] font-semibold uppercase">
          Підпишись на розсилку та отримай <br></br>10% знижки на наступне
          замовлення
        </p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center"
          >
            <input
              className="min-w-[360px] border py-[14px] pl-6"
              placeholder="example@gmail.com"
              {...register("maillistEmail")}
            />
            <input
              className="border-black bg-black px-8 py-[14px] text-center text-[17px] text-white"
              type="submit"
              value="Підписатися"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export { Subscription };
