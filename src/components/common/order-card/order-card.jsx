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
        <div className="grid grid-cols-2 justify-between gap-6">
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
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-0 pr-2 font-normal">Товар</th>
                <th className="p-0 pr-2 font-normal">Назва</th>
                <th className="p-0 pr-2 font-normal">Розмір</th>
                <th className="p-0 pr-2 font-normal">Колір</th>
                <th className="p-0 font-normal">Ціна</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xs">
                <td className="p-0 py-6 pr-2">
                  <NavLink className="inline-block" to="#">
                    <img
                      className="h-[130px]"
                      src="/img/girl_in_grey.webp"
                      alt="Оверсайз жакет CLASSY"
                    />
                  </NavLink>
                </td>
                <td className="p-0 py-6 pr-2">
                  <NavLink className="hover:underline" to="#">
                    Оверсайз жакет CLASSY
                  </NavLink>
                </td>
                <td className="p-0 py-6 pr-2">M</td>
                <td className="p-0 py-6 pr-2">світло-сірий</td>
                <td className="p-0 py-6 font-bold">3650 ₴</td>
              </tr>
              <tr className="text-xs">
                <td className="p-0 pr-2">
                  <NavLink className="inline-block" to="#">
                    <img
                      className="h-[130px]"
                      src="/img/girl_in_black.webp"
                      alt="Сітка-лонг LAST DRINK"
                    />
                  </NavLink>
                </td>
                <td className="p-0 pr-2">
                  <NavLink className="hover:underline" to="#">
                    Сітка-лонг LAST DRINK
                  </NavLink>
                </td>
                <td className="p-0 pr-2 uppercase">L</td>
                <td className="p-0 pr-2">чорний</td>
                <td className="p-0 font-bold">650 ₴</td>
              </tr>
            </tbody>
          </table>
          <div className="my-[60px] grid grid-cols-2 gap-16">
            <div>
              <h3 className="mb-4 font-bold">Доставка</h3>
              <span>За тарифами перевізника</span>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Оплата</h3>
              <span>Оплата під час отримання товара</span>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Адреса доставки</h3>
              <div className="flex flex-col gap-1.5">
                <span>м. Київ</span>
                <span>вул. Вишнева</span>
                <span>будинок 29 квартира 35</span>
              </div>
            </div>
          </div>
          <div className="mb-1 flex justify-between">
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
