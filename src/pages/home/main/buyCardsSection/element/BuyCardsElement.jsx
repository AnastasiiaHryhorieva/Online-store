import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import useProductsMainPage from "src/hooks/graphQL/useProductsMainPage";
import BuyCard from "./card/BuyCard";

// import useIcons from "src/hooks/graphQL/useIcons";
// import Arrow from "src/components/shared/Arrow";

const BuyCardsElement = ({ title, category }) => {
  const filteredProducts = useProductsMainPage(category);

  const { data } = filteredProducts;
  const products = data?.allProducts;

  return (
    <div>
      <section>
        <div className="flex-between relative px-[140px] mb-6">
          <p
            className={`text-120 text-stroke__gray absolute -top-[148%] left-[6%] uppercase -z-10`}
          >
            {title}
          </p>
          <p className="text-40 uppercase">{title}</p>
          <NavLink to="/" className="flex-center gap-[10px] mr-2">
            <p className="text-18 font-semibold">Дивитись всі</p>
            <BsArrowRight style={{ width: 24, height: 28 }} />
            {/* <Arrow /> */}
          </NavLink>
        </div>
      </section>

      <div className="flex gap-[30px] mb-[120px] justify-center flex-wrap">
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
