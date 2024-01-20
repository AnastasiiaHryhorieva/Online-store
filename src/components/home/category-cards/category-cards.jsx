import useCategoriesMain from "src/hooks/graphQL/useCategories";
import { CategoryCard } from "./category-card/category-card";

const CategoryCards = () => {
  const categoriesInfo = useCategoriesMain();

  const data = categoriesInfo;
  const categories = data?.allCategories;

  return (
    <div className="flex-center mb-36 flex-wrap gap-[30px]">
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export { CategoryCards };
