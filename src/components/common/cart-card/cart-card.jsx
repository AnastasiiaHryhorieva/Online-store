import { useState } from "react";
import { NavLink } from "react-router-dom";

import { getDiscountPrice } from "@/helpers/helpers";
import { Icon } from "@/components/common/icon/icon";
import { Counter } from "@/components/common/counter/counter";

// TODO: img, color title
const CartCard = ({ img, title, price, discount, isNew, color, size }) => {
  const [count, setCount] = useState(1);
  const discountPrice = getDiscountPrice(price, discount);

  return (
    <div className="flex gap-4">
      <NavLink className="max-w-[175px]" to="#">
        <img src="/img/girl_in_brown.webp" alt="#" />
      </NavLink>

      <div className="flex w-full gap-1">
        <div className="flex flex-grow flex-col">
          <div className="grid grid-cols-[1fr_min-content] items-center gap-3">
            <h3 className="uppercase leading-none">
              <NavLink className="leading-normal hover:underline" to="#">
                {title}
              </NavLink>
              {isNew && <span className="text-[--green]"> New</span>}
            </h3>
            <button type="button">
              <Icon
                className="fill-transparent duration-200 hover:fill-[--red] hover:text-[--red]"
                name="heart"
              />
            </button>
          </div>

          <span className="my-2">{color}</span>
          <span>{size}</span>

          <Counter
            className="my-4"
            value={count}
            onChange={(value) => setCount(value)}
          />

          <div className="mt-auto grid grid-cols-[1fr_min-content] items-center gap-3">
            <div className="flex items-center text-base_l">
              {discount ? (
                <>
                  <span className="whitespace-nowrap text-[--red]">
                    {discountPrice} ₴
                  </span>
                  <span className="ml-2.5 whitespace-nowrap text-sm text-black/60 line-through">
                    {price} ₴
                  </span>
                </>
              ) : (
                <span className="whitespace-nowrap">{price} ₴</span>
              )}
            </div>

            <button type="button">
              <Icon className="duration-200 hover:text-[--red]" name="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
