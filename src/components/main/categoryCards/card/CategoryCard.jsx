import React from "react";

import Arrow from "src/components/shared/Arrow";
import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoryImage } = category;
  const { responsiveImage } = categoryImage;

  return (
    <div>
      <Image data={responsiveImage} className="mb-4" />
      <NavLink to={category.slug} className="flex gap-4">
        <h2 className="text-18 uppercase font-semibold">
          {category.categoryTitle}
        </h2>
        <Arrow />
      </NavLink>
    </div>
  );
};

export default CategoryCard;
