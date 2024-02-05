import { useParams, useSearchParams } from "react-router-dom";

import { useAllProducts } from "@/hooks/graphQL/useAllProducts";
import { Card } from "@/components/common/card/card";
import { Spinner } from "@/components/common/spinner/spinner";

const CatalogContent = () => {
  const params = useParams();
  const category = params["*"];

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  const { loading, data: products } = useAllProducts({
    serchTerm: searchTerm || "",
    category: category || undefined,
  });

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size={60} />
      </div>
    );
  }

  return (
    <section className="grid">
      <h1 className="-mt-4 text-title leading-none">Каталог</h1>

      <div className="mb-16 mt-[30px] grid gap-[30px] max-md:justify-items-center sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] lg:grid-cols-3">
        {products.map((product) => (
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
