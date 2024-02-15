import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useAllProducts } from "@/hooks/graphQL/useAllProducts";
import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";
import { Subscription } from "@/components/common/subscription/subscription";
import { SidebarCatalog } from "@/components/common/sidebar-catalog/sidebar-catalog";
import { Card } from "@/components/common/card/card";
import { Filters } from "@/components/common/filters/filters";
import { Skeleton } from "@/components/ui/skeleton";

const Catalog = () => {
  const params = useParams();
  const category = params["category"];
  const skeletons = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const price = searchParams.getAll("price");
  const sort = searchParams.get("sort");

  // parse price searchParams
  const priceRange = price
    .flatMap((price) => {
      if (price.includes("-")) {
        const [minPrice, maxPrice] = price.split("-");
        return [parseInt(minPrice), parseInt(maxPrice)];
      } else {
        return [parseInt(price)];
      }
    })
    .sort((a, b) => a - b);

  const priceMin = priceRange[0];
  const priceMax = priceRange.length > 1 ? priceRange.at(-1) : undefined;

  const { loading, data: products } = useAllProducts({
    serchTerm: searchTerm || "",
    category: category || undefined,
    priceMin: priceMin,
    priceMax: priceMax,
    sort,
  });

  return (
    <section>
      <div className="container pb-12 pt-4">
        <Breadcrumbs className="mb-9" />
        <div className="grid gap-16 md:grid-cols-[170px_1fr]">
          <SidebarCatalog className="max-md:hidden" />
          <section>
            <h1 className="-mt-4 mb-6 text-title leading-none">Каталог</h1>

            <Filters />
            <div className="mb-16 mt-6 grid gap-[30px] max-md:justify-items-center sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] lg:grid-cols-3">
              {loading ? (
                <>
                  {skeletons.map((skeleton) => (
                    <div key={skeleton} className="w-full">
                      <Skeleton className="h-[240px] w-full" />
                      <div className="flex justify-between gap-4 p-4 pb-0">
                        <div className="flex-grow">
                          <Skeleton className="h-6 w-full" />

                          <div className="mt-2 flex flex-wrap gap-2">
                            <Skeleton className="h-5 w-5 rounded-full" />
                            <Skeleton className="h-5 w-5 rounded-full" />
                            <Skeleton className="h-5 w-5 rounded-full" />
                          </div>
                        </div>
                        <Skeleton className="h-6 w-10" />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      title={product.title}
                      image={product.image[0].responsiveImage}
                      price={product.price}
                      discount={product.discount}
                      colors={product.colors}
                      isNew={product.isnew}
                      slug={product.slug}
                    />
                  ))}
                </>
              )}
            </div>
          </section>
        </div>
      </div>
      <Subscription />
    </section>
  );
};

export { Catalog };
