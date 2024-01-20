import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoryImage } = category;
  const { responsiveImage } = categoryImage;

  return (
    <div>
      <Image data={responsiveImage} className="mb-4" />
      <NavLink to={category.slug} className="flex items-center gap-4">
        <h2 className="text-18 font-semibold uppercase">
          {category.categoryTitle}
        </h2>
        {/* TODO: arrow icon */}
      </NavLink>
    </div>
  );
};

export { CategoryCard };
