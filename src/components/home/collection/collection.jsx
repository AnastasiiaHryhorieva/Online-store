import { NavLink } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";

const Collection = () => {
  return (
    <section className="mx-auto max-w-[1140px]">
      <div className="collection flex min-h-[400px] flex-col items-center md:min-h-[620px] lg:min-h-[706px]">
        <h1 className="text-stroke-black mb-4 mt-auto px-6 text-center text-[34px] font-bold uppercase leading-tight text-transparent md:text-[60px] lg:text-[80px]">
          SS&apos;2023 Collection
        </h1>
        <NavLink
          className={
            buttonVariants({ variant: "outlineReverse" }) +
            " mb-[35px] w-auto min-w-[226px] text-base_l"
          }
          to="/catalog"
        >
          Переглянути
        </NavLink>
      </div>
    </section>
  );
};

export { Collection };
