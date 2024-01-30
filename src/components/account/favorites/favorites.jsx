import { useProductsByCategory } from "@/hooks/graphQL/useProductsByCategory";
import { Card } from "@/components/common/card/card";

const Favorites = () => {
  const { data: products } = useProductsByCategory("bestsellers");

  return (
    <div>
      <h2 className="mb-6 text-title">Улюблені товари ({products?.length})</h2>

      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] lg:grid-cols-3">
        {products?.map((product) => (
          <li key={product.id}>
            <Card
              title={product.title}
              image={product.image[0].responsiveImage}
              price={product.price}
              colors={product.colors}
              isNew={product.isnew}
              slug={product.slug}
              isAvailable={product.isavailable}
              showAvailability
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Favorites };
