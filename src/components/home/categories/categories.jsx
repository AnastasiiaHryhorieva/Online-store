import useCategoriesMain from "@/hooks/graphQL/useCategories";
import { CategoryCard } from "@/components/common/category-card/category-card";

const Categories = () => {
  const categoriesInfo = useCategoriesMain();

  const data = categoriesInfo;
  const categories = data?.allCategories;

  return (
    <section className="mb-[75px] md:mb-[150px]">
      <div className="container">
        <ul className="grid gap-[30px] max-md:justify-items-center sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] lg:grid-cols-3">
          {categories?.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Categories };
