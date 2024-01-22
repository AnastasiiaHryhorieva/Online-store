import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";

import { Icon } from "@/components/common/icon/icon";

const CategoryCard = ({ category }) => {
  const { categoryImage } = category;
  const { responsiveImage } = categoryImage;

  return (
    <div>
      <NavLink className="block" to={category.slug}>
        <Image className="mb-4" data={responsiveImage} />
      </NavLink>
      <NavLink className="group flex items-center" to={category.slug}>
        <h2 className="text-base font-semibold uppercase">
          {category.categoryTitle}
        </h2>
        <Icon
          className="ml-4 duration-200 group-hover:translate-x-1"
          name="arrowRight"
        />
      </NavLink>
    </div>
  );
};

export { CategoryCard };
