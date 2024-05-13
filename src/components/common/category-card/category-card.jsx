import { Image } from "react-datocms";
import { NavLink } from "react-router-dom";

import { Icon } from "@/components/common/icon/icon";

const CategoryCard = ({ category }) => {
  const { image } = category;

  return (
    <div className="group">
      <NavLink className="block" to={"/catalog/" + category.slug}>
        <Image className="mb-4" data={image.responsiveImage} />
      </NavLink>
      <NavLink className="flex items-center" to={"/catalog/" + category.slug}>
        <h2 className="text-xs font-semibold uppercase md:text-base">
          {category.title}
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
