import React from "react";
import { NavLink } from "react-router-dom";

import useProductsMainPage from "src/hooks/graphQL/useProductsMainPage";
import BuyCard from "./card/BuyCard";

const BuyCardsElement = ({ title, category }) => {
  const filteredProducts = useProductsMainPage(category);

  const { data } = filteredProducts;
  const products = data?.allProducts;

  return (
    <div>
      <section>
        <div className="flex-between relative mb-6 px-[140px]">
          <p className="text-120 text-stroke__gray absolute -top-[148%] left-[6%] -z-10 uppercase">
            {title}
          </p>
          <p className="text-40 uppercase">{title}</p>
          <NavLink to="/" className="flex-center mr-2 gap-[10px]">
            <p className="text-18 font-semibold">Дивитись всі</p>
            {/* TOOD: arrow icon */}
          </NavLink>
        </div>
      </section>

      <div className="mb-[120px] flex flex-wrap justify-center gap-[30px]">
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <BuyCard isNew={category} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyCardsElement;
