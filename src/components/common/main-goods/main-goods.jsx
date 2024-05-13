import { NavLink } from "react-router-dom";

import { useProductsByCategory } from "@/hooks/graphQL/useProductsByCategory";
import { Card } from "@/components/common/card/card";
import { Icon } from "@/components/common/icon/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const MainGoods = ({ title, category }) => {
  const { data: products } = useProductsByCategory(category);

  return (
    <section>
      <div className="container">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4">
          <div className="relative">
            <h2 className="text-title uppercase">{title}</h2>
            <span className="text-stroke-green absolute -left-[2.5vw] bottom-[10px] -z-10 text-[clamp(55px,calc(1.725rem_+_5.7vw),120px)] uppercase leading-none text-transparent sm:max-md:-left-[2vw] md:bottom-[8px] lg:bottom-[5px]">
              {title}
            </span>
          </div>
          <NavLink
            className="group flex items-center text-base"
            to={`catalog/${category}`}
          >
            Дивитись всі
            <Icon
              className="ml-[10px] duration-200 group-hover:translate-x-1"
              name="arrowRight"
            />
          </NavLink>
        </div>
        <Carousel
          className="max-md:max-w-[calc(100vw_-_32px)]"
          opts={{
            containScroll: "keepSnaps",
            breakpoints: {
              "(min-width: 480px)": { slidesToScroll: 2 },
            },
          }}
        >
          <CarouselContent>
            {products?.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[75%] sm:basis-[40%] md:basis-1/3"
              >
                <Card
                  title={product.title}
                  image={product.image[0].responsiveImage}
                  price={product.price}
                  discount={product.discount}
                  colors={product.colors}
                  isNew={product.isnew}
                  slug={product.slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { MainGoods };
