import React from "react";
import { BuyCard } from "./card/BuyCard";

import right_arrow from "src/assets/images/icons/arrow-right.svg";
import { NavLink } from "react-router-dom";
import useProductsMainPage from "src/hooks/useProductsMainPage";

const BuyCardsElement = ({ title, category }) => {
  const filteredProducts = useProductsMainPage(category);

  const { data } = filteredProducts;
  const products = data?.allProducts;

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
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <BuyCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyCardsElement;
