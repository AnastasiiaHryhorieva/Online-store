import React, { useEffect, useState } from "react";
import useAllProducts from "src/hooks/graphQL/useAllProducts";
import BuyCard from "src/pages/home/main/buyCardsSection/element/card/BuyCard";
import { useSearchParams } from "react-router-dom";

const Cards = () => {
  const [stringQueries, setStringQueries] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setStringQueries([]);
    for (const [key, value] of searchParams.entries()) {
      setStringQueries((arr) => [...arr, { [key]: value }]);
    }
  }, [searchParams]);

  const dsa = useAllProducts();
  const { data } = dsa;
  const products = data?.allProducts;

  return (
    <div className="flex flex-wrap gap-7 mb-16">
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <BuyCard product={product} smallSize />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
