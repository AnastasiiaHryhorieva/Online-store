import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useAllProducts from "@/hooks/graphQL/useAllProducts";
import { Card } from "@/components/common/card/card";

const Cards = () => {
  const [stringQueries, setStringQueries] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setStringQueries([]);
    for (const [key, value] of searchParams.entries()) {
      setStringQueries((arr) => [...arr, { [key]: value }]);
    }
  }, [searchParams]);

  // TODO: fix useAllProducts query
  const { data } = useAllProducts();
  const products = data?.allProducts;

  return (
    <div className="mb-16 flex flex-wrap gap-7">
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <Card
              title={product.title}
              image={product.image[0].responsiveImage}
              price={product.price}
              discount={product.discount}
              colors={product.colors}
              isNew={product.isnew}
              slug={product.slug}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Cards };
