import React from "react";
import arrow_right from "src/assets/images/icons/arrow-right.svg";
import { NavLink } from "react-router-dom";
import { Image } from "react-datocms";

const CategoryCard = ({ category }) => {
  const { categoryImage } = category;
  const { responsiveImage } = categoryImage;
  return (
    <div>
      <Image data={responsiveImage} />
      <NavLink to={category.slug} className="flex gap-4">
        <h2 className="text-18 uppercase">{category.categoryTitle}</h2>
        <img src={arrow_right} alt="arrow" />
      </NavLink>
    </div>
  );
};

export default CategoryCard;
