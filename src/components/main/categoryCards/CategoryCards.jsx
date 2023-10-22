import React from "react";
import { categoryInfo } from "./category_info";
import CategoryCard from "./card/CategoryCard";

const CategoryCards = () => {
  return (
    <div className="flex-center gap-[30px] mb-36">
      {categoryInfo.map(({ id, src, title, to }) => (
        <CategoryCard key={id} src={src} title={title} to={to} />
      ))}
    </div>
  );
};

export default CategoryCards;
