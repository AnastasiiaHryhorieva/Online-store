import { useProductsByCategory } from "@/hooks/graphQL/useProductsByCategory";
import { Card } from "@/components/common/card/card";

const RelatedGoods = ({ category }) => {
  const { data: products } = useProductsByCategory(category);

  return (
    <section>
      <h2 className="mb-4 text-[32px] leading-normal">Вас може зацікавити</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] lg:grid-cols-3">
        {products?.map((product) => (
          <li key={product.id}>
            <Card
              title={product.title}
              image={product.image[0].responsiveImage}
              price={product.price}
              discount={product.discount}
              colors={product.colors}
              isNew={product.isnew}
              slug={product.slug}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { RelatedGoods };
