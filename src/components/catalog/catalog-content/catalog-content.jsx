import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAllProducts } from "@/hooks/graphQL/useAllProducts";
import { Card } from "@/components/common/card/card";

const CatalogContent = () => {
  const [stringQueries, setStringQueries] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setStringQueries([]);
    for (const [key, value] of searchParams.entries()) {
      setStringQueries((arr) => [...arr, { [key]: value }]);
    }
  }, [searchParams]);

  const { data } = useAllProducts();
  const products = data?.allProducts;

  return (
    <section>
      <h1 className="-mt-4 text-title leading-none">Каталог</h1>

      <div className="mt-[30px] grid gap-[30px] max-md:justify-items-center sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] lg:grid-cols-3">
        {products?.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image[0].responsiveImage}
            price={product.price}
            discount={product.discount}
            colors={product.colors}
            isNew={product.isnew}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
};

export { CatalogContent };
