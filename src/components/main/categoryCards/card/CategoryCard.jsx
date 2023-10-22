import React from "react";
import arrow_right from "src/assets/images/icons/arrow-right.svg";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ src, title, to }) => {
  return (
    <div>
      <img src={src} alt="category_image" className="mb-4" />
      <NavLink to={to} className="flex gap-4">
        <h2 className="text-18 uppercase">{title}</h2>
        <img src={arrow_right} alt="arrow" />
      </NavLink>
    </div>
  );
};

export default CategoryCard;
