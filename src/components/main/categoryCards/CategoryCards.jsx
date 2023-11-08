import React from "react";
import CategoryCard from "./card/CategoryCard";
import useCategoriesMain from "../../../hooks/useCategories";

const CategoryCards = () => {
  const categoriesInfo = useCategoriesMain();

  const { data } = categoriesInfo;
  const categories = data?.allCategories;

  return (
    <div className="flex-center gap-[30px] mb-36 flex-wrap">
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryCards;
