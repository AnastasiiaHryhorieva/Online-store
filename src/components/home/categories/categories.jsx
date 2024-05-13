import { useAllCategories } from "@/hooks/graphQL/useAllCategories";
import { CategoryCard } from "@/components/common/category-card/category-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Categories = () => {
  const { data: categories } = useAllCategories({
    first: 2,
  });

  const allProductsCategory = {
    title: "Переглянути все",
    slug: "",
    image: {
      responsiveImage: {
        src: "/img/girl_in_brown.webp",
        width: 360,
        height: 450,
        alt: "",
      },
    },
  };

  return (
    <section className="my-[60px] lg:my-[115px]">
      <div className="container">
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
            <CarouselItem className="basis-[75%] sm:basis-[40%] md:basis-1/3">
              <CategoryCard category={allProductsCategory} />
            </CarouselItem>
            {categories?.map((category) => (
              <CarouselItem
                key={category.id}
                className="basis-[75%] sm:basis-[40%] md:basis-1/3"
              >
                <CategoryCard category={category} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Categories };
