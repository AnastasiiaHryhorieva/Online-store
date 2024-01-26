import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useAllProducts from "@/hooks/graphQL/useAllProducts";
// import { BuyCard } from "@/components/home/buy-cards-section/buy-cards-element/buy-card/buy-card";

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
    <div className="mb-16 flex flex-wrap gap-7">
      {products?.map((product) => {
        return (
          <div key={product.id}>
            {/* <BuyCard product={product} smallSize /> */}
          </div>
        );
      })}
    </div>
  );
};

export { Cards };
