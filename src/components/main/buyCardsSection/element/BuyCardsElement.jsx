import React from "react";
import BuyCard from "./card/BuyCard";

import right_arrow from "src/assets/images/icons/arrow-right.svg";
import { NavLink } from "react-router-dom";

import { cardsInfo } from "./card/cardsInfo";

const BuyCardsElement = ({ title }) => {
  const { bestsellers, news, sale } = cardsInfo;

  console.log();

  const active = () => {
    if (title === "Бестселери") return bestsellers;
    if (title === "Новинки") return news;
    if (title === "Sale") return sale;
  };

  return (
    <div>
      <section>
        <div className="flex-between relative px-[140px] mb-6">
          <p
            className={`text-120 text-stroke__gray absolute -top-[148%] left-[5%] uppercase -z-10`}
          >
            {title}
          </p>
          <p className="text-40 uppercase">{title}</p>
          <NavLink to="/" className="flex-center gap-[10px]">
            <p className="text-18 font-semibold">Дивитись всі</p>
            <img src={right_arrow} alt="right_arrow" />
          </NavLink>
        </div>
      </section>

      <div className="flex gap-[30px] pb-[120px] justify-center flex-wrap">
        {active().map(
          ({ id, title, image, price, salePrice, discount, colors }) => (
            <div key={id}>
              <BuyCard
                id={id}
                title={title}
                image={image}
                price={price}
                salePrice={salePrice}
                discount={discount}
                colors={colors}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BuyCardsElement;
