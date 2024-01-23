import { NavLink } from "react-router-dom";

const Collection = () => {
  return (
    <section className="bg-[url('/img/collection.webp')] bg-cover bg-center bg-no-repeat pb-[35px] pt-[270px] sm:pt-[320px] md:pt-[400px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-stroke-black mb-9 max-w-2xl text-center text-[50px] font-bold uppercase leading-tight text-transparent sm:text-[70px] md:text-[100px]">
          SS'2023 Collection
        </h1>
        <NavLink
          className="button min-w-[226px] text-center hover:bg-transparent focus-visible:bg-transparent"
          to="#"
        >
          Переглянути
        </NavLink>
      </div>
    </section>
  );
};

export { Collection };
