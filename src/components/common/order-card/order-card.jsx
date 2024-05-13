import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { OrederStatus } from "./oreder-status/oreder-status";

const OrderCard = ({ status }) => {
  const scrollRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDetails = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      setTimeout(() => {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      className="grid min-h-[160px] border border-black/10 p-4"
    >
      {!isExpanded ? (
        <div className="flex flex-wrap justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <OrederStatus status={status} />
            <span className="text-xs leading-normal">
              Замовлення №1940 від 12.05.2023
            </span>
            <span className="text-xs font-bold leading-normal">2240₴</span>

            <button
              className="mt-auto self-start text-xs underline"
              type="button"
              onClick={handleToggleDetails}
            >
              Деталі замовлення
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2.5 justify-self-end">
            <img
              className="h-[130px]"
              src="/img/girl_in_grey.webp"
              alt="Оверсайз жакет CLASSY"
            />
            <img
              className="h-[130px]"
              src="/img/girl_in_black.webp"
              alt="Сітка-лонг LAST DRINK"
            />
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="mb-10 flex flex-col gap-1.5">
            <OrederStatus status={status} />
            <span className="text-xs leading-normal">Отримано 15.05.2023</span>
            <span className="text-xs leading-normal">Замовлення №1940</span>
            <span className="text-xs leading-normal">2 товари</span>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Товар</h3>

            <ul className="space-y-4">
              <li className="flex gap-5 md:gap-[30px]">
                <NavLink className="inline-block" to="#">
                  <img
                    className="h-[130px]"
                    src="/img/girl_in_grey.webp"
                    alt="Оверсайз жакет CLASSY"
                  />
                </NavLink>

                <div className="flex flex-col gap-4">
                  <NavLink className="hover:underline" to="#">
                    Оверсайз жакет CLASSY
                  </NavLink>
                  <div>M/світло-сірий</div>
                  <div className="mt-auto font-bold">3650 ₴</div>
                </div>
              </li>
              <li className="flex gap-5 md:gap-[30px]">
                <NavLink className="inline-block" to="#">
                  <img
                    className="h-[130px]"
                    src="/img/girl_in_black.webp"
                    alt="Сітка-лонг LAST DRINK"
                  />
                </NavLink>

                <div className="flex flex-col gap-4">
                  <NavLink className="hover:underline" to="#">
                    Сітка-лонг LAST DRINK
                  </NavLink>
                  <div>L/світло-чорний</div>
                  <div className="mt-auto font-bold">650 ₴</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-4 mt-9">
            <h3 className="mb-1 font-bold">Доставка</h3>
            <span>За тарифами перевізника</span>
          </div>
          <div className="mb-4">
            <h3 className="mb-1 font-bold">Оплата</h3>
            <span>Оплата під час отримання товара</span>
          </div>
          <div>
            <h3 className="mb-1 font-bold">Адреса доставки</h3>
            <div className="flex flex-col gap-1.5">
              <span>м. Київ</span>
              <span>вул. Вишнева</span>
              <span>будинок 29 квартира 35</span>
            </div>
          </div>
          <div className="mb-1 mt-9 flex justify-between">
            <span>Разом</span>
            <span>4300₴</span>
          </div>
          <div className="mb-3 flex justify-between">
            <span>Доставка</span>
            <span className="text-[--green]">0₴</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span className="font-bold">Сума до сплати</span>
            <span className="font-bold">4300₴</span>
          </div>
          <button
            className="text-xs underline"
            type="button"
            onClick={handleToggleDetails}
          >
            Сховати деталі
          </button>
        </div>
      )}
    </div>
  );
};

export { OrderCard };
