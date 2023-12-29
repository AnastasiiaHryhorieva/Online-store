import React from "react";

// import Arrow from "src/components/shared/Arrow";
import { BsArrowRight } from "react-icons/bs";

import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoryImage } = category;
  const { responsiveImage } = categoryImage;

  return (
    <div>
      <Image data={responsiveImage} className="mb-4" />
      <NavLink to={category.slug} className="flex gap-4 items-center">
        <h2 className="text-18 uppercase font-semibold">
          {category.categoryTitle}
        </h2>
        <BsArrowRight style={{ width: 24, height: 28 }} />
        {/* <Arrow /> */}
      </NavLink>
    </div>
  );
};

export default CategoryCard;
