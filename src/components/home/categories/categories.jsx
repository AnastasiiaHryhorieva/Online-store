import { useAllCategories } from "@/hooks/graphql/useAllCategories";
import { CategoryCard } from "@/components/common/category-card/category-card";
import { Skeleton } from "@/components/ui/skeleton";

const Categories = () => {
  const skeletons = Array(1, 2, 3);
  const { loading, data: categories } = useAllCategories({
    first: 2,
  });

  const allProductsCategory = {
    title: "Переглянути все",
    slug: "",
    image: {
      responsiveImage: {
        src: "/img/girl_in_brown.webp",
        width: 360,
        height: 450,
        alt: "",
      },
    },
  };

  return (
    <section className="mb-[75px] md:mb-[150px]">
      <div className="container">
        <ul className="grid gap-[30px] max-md:justify-items-center sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] lg:grid-cols-3">
          {loading ? (
            <>
              {skeletons.map((_, index) => (
                <li key={index} className="w-full">
                  <Skeleton className="h-[240px] w-full" />
                  <Skeleton className="mt-4 h-6 w-full" />
                </li>
              ))}
            </>
          ) : (
            <>
              <li>
                <CategoryCard category={allProductsCategory} />
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <CategoryCard category={category} />
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export { Categories };
