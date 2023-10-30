import React from "react";
import { useForm } from "react-hook-form";

const Maillist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex-around mb-12 flex-wrap">
      <p className="max-w-[432px] text-18 uppercase font-semibold">
        Підпишись на розсилку та отримай 10% знижки на наступне замовлення
      </p>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center"
        >
          <input
            className="border py-[14px] pl-6 min-w-[360px]"
            placeholder="example@gmail.com"
            {...register("maillistEmail")}
          />
          <input
            className="border-black text-center py-[14px] px-8 bg-black text-white font-['Manrope'] text-[17px]"
            type="submit"
            value="Підписатися"
          />
        </form>
      </div>
    </div>
  );
};

export default Maillist;
