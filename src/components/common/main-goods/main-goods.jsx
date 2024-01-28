import { NavLink } from "react-router-dom";

import useProductsMainPage from "@/hooks/graphQL/useProductsMainPage";
import { Card } from "@/components/common/card/card";
import { Icon } from "@/components/common/icon/icon";

const MainGoods = ({ title, category }) => {
  const filteredProducts = useProductsMainPage(category);
  const { data } = filteredProducts;
  const products = data?.allProducts;

  return (
    <section>
      <div className="container">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4">
          <div className="relative">
            <h2 className="text-title uppercase">{title}</h2>
            <span className="text-stroke-gray absolute -left-[2.5vw] bottom-[10px] -z-10 text-[clamp(55px,calc(1.725rem_+_5.7vw),120px)] uppercase leading-none text-transparent sm:max-md:-left-[2vw] md:bottom-[8px] lg:bottom-[5px]">
              {title}
            </span>
          </div>
          <NavLink className="group flex items-center text-base" to="#">
            Дивитись всі
            <Icon
              className="ml-[10px] duration-200 group-hover:translate-x-1"
              name="arrowRight"
            />
          </NavLink>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] lg:grid-cols-3">
          {products?.map((product) => (
            <li key={product.id}>
              <Card
                title={product.title}
                image={product.image[0].responsiveImage}
                price={product.price}
                discount={product.discount}
                colors={product.colors}
                isNew={product.isnew}
                slug={product.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { MainGoods };
