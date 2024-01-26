import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";
import { Icon } from "@/components/common/icon/icon";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <section className="pb-[150px] pt-4">
      <div className="container">
        <Breadcrumbs />

        <div className="mt-10 grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h1 className="mb-2.5 text-title">Hello Product!</h1>
            <span className="mb-2.5 text-[32px] font-bold">650₴</span>
            <span className="mb-4 text-base text-[--green]">Є в наявності</span>

            <ul className="mt-auto">
              <li>
                <NavLink
                  className="group flex items-center justify-between gap-2 border-b border-[#d9d9d9] py-5 text-base"
                  to="#"
                >
                  Опис товару
                  <Icon
                    className="duration-200 group-hover:translate-x-1"
                    name="arrowRight"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="group flex items-center justify-between gap-2 border-b border-[#d9d9d9] py-5 text-base"
                  to="#"
                >
                  Склад
                  <Icon
                    className="duration-200 group-hover:translate-x-1"
                    name="arrowRight"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="group flex items-center justify-between gap-2 border-b border-[#d9d9d9] py-5 text-base"
                  to="#"
                >
                  Догляд за річчю
                  <Icon
                    className="duration-200 group-hover:translate-x-1"
                    name="arrowRight"
                  />
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <img src="https://placehold.co/480x600" alt="#" />
          </div>

          <div className="flex flex-col gap-10">
            <span className="text-base">Оберіть розмір</span>
            <span className="text-base">Оберіть колір</span>

            <div className="mt-auto flex items-center gap-3">
              <button className="button rounded-[3px] px-5 py-10" type="button">
                Додати до Кошика
              </button>
              <button type="button">
                <Icon
                  className="fill-transparent duration-200 hover:fill-[--red] hover:text-[--red]"
                  name="heart"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Product };
