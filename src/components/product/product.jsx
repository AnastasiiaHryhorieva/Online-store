import { useParams } from "react-router-dom";
import { Image } from "react-datocms";

import { useProductBySlug } from "@/hooks/graphQL/useProductBySlug";
import { getSizeLabel } from "@/helpers/helpers";
import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";
import { Icon } from "@/components/common/icon/icon";
import { Spinner } from "@/components/common/spinner/spinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Product = () => {
  const { slug } = useParams();
  const { loading, data } = useProductBySlug(slug);
  const product = data?.product;

  if (loading) {
    return (
      <div className="flex h-full min-h-[400px] items-center justify-center">
        <Spinner size={60} />
      </div>
    );
  }

  // TODO: change approach for discount price
  const discountPrice =
    product.price - product.price * (product.discount / 100);
  const productSizes = Object.keys(product.sizes);

  return (
    <section className="pb-[150px] pt-4">
      <div className="container">
        <Breadcrumbs />

        <div className="mt-10 grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h1 className="mb-2.5 text-title">
              {product.title}
              {product.isnew && (
                <span className="uppercase text-[--green]"> new</span>
              )}
            </h1>

            <div className="mb-2.5 flex flex-col text-[32px] font-bold">
              {product.discount ? (
                <>
                  <span className="whitespace-nowrap text-[--red]">
                    {discountPrice} <sup>-{product.discount}%</sup>
                  </span>
                  <span className="whitespace-nowrap text-black/60 line-through">
                    {product.price} ₴
                  </span>
                </>
              ) : (
                <span className="whitespace-nowrap">{product.price} ₴</span>
              )}
            </div>

            <div className="mt-2 flex items-center justify-between gap-3">
              {product.isavailable ? (
                <>
                  <span className="text-[--green]">Є в наявності</span>
                  <Icon className="text-[--green]" name="shoppingBag" />
                </>
              ) : (
                <>
                  <span className="text-black/60">Немає в наявності</span>
                  <button type="button">
                    <Icon
                      className="fill-transparent text-black duration-200 hover:fill-black"
                      name="bell"
                    />
                  </button>
                </>
              )}
            </div>

            <Accordion className="mt-10" type="multiple" collapsible={false}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-5">
                  Опис товару
                </AccordionTrigger>
                <AccordionContent className="border-b py-5">
                  {product.description || "Інформація відсутня."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="py-5">Склад</AccordionTrigger>
                <AccordionContent className="border-b py-5">
                  {product.composition || "Інформація відсутня."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="py-5">
                  Догляд за річчю
                </AccordionTrigger>
                <AccordionContent className="border-b py-5">
                  {product.care || "Інформація відсутня."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Image data={product.image[0].responsiveImage} />
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="mb-4 text-base">Оберіть розмір</h2>
              <RadioGroup className="flex flex-wrap gap-3" defaultValue="xs">
                {productSizes.map((size) => {
                  const sizeLabel = getSizeLabel(size);
                  const hasSize = product.sizes[size];

                  return (
                    <div key={sizeLabel}>
                      <RadioGroupItem
                        id={sizeLabel}
                        className="peer hidden"
                        value={sizeLabel}
                        disabled={!hasSize}
                      />
                      <Label
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-base uppercase peer-disabled:text-black/30 peer-aria-checked:border peer-aria-checked:border-current"
                        htmlFor={sizeLabel}
                      >
                        {sizeLabel}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
            <div>
              <h2 className="text-base">Оберіть колір</h2>
            </div>

            <div className="mt-32 flex items-center gap-3">
              <button className="button rounded-[3px] px-5 py-10" type="button">
                Додати до Кошика
              </button>
              <button type="button">
                <Icon
                  className="fill-transparent duration-200 hover:fill-[--red] hover:text-[--red]"
                  name="heart"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Product };