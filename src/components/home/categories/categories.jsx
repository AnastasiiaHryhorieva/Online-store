import useCategoriesMain from "src/hooks/graphQL/useCategories";
import { CategoryCard } from "src/components/common/category-card/category-card";

const Categories = () => {
  const categoriesInfo = useCategoriesMain();

  const data = categoriesInfo;
  const categories = data?.allCategories;

  return (
    <section className="mb-[75px] md:mb-[150px]">
      <div className="container">
        <ul className="grid gap-[30px] max-md:justify-items-center sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
          {categories?.map((category) => (
            <li>
              <CategoryCard key={category.id} category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Categories };
