import { useLocation, useParams, useSearchParams } from "react-router-dom";

import { getBreadcrumbLabel } from "@/helpers/helpers";
import { useAllProducts } from "@/hooks/graphQL/useAllProducts";
import { Breadcrumbs } from "@/components/common/breadcrumbs/breadcrumbs";
import { Subscription } from "@/components/common/subscription/subscription";
import { SidebarCatalog } from "@/components/common/sidebar-catalog/sidebar-catalog";
import { Card } from "@/components/common/card/card";
import { Filters } from "@/components/common/filters/filters";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Catalog = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const category = params["category"] ?? undefined;
  const skeletons = Array(1, 2, 3, 4, 5, 6);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") ?? "";
  const price = searchParams.getAll("price");
  const sort = searchParams.get("sort");

  const page = parseInt(searchParams.get("page") ?? 1);
  const productsPerPage = 12;
  const skipNumberOfProducts = page === 1 ? 0 : (page - 1) * productsPerPage;

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

  let priceMin;
  let priceMax;

  if (priceRange.includes(2000) && priceRange.length > 1) {
    // from min price to infinity
    priceMin = priceRange[0];
    priceMax = undefined;
  } else {
    // from min price to max price
    priceMin = priceRange[0];
    priceMax = priceRange.length > 1 ? priceRange.at(-1) : undefined;
  }

  const { loading, data } = useAllProducts({
    searchTerm,
    category,
    priceMin,
    priceMax,
    sort,
    first: productsPerPage,
    skip: skipNumberOfProducts,
  });

  const pageOffset = 2; // number of pages before and after current page
  const totalPages = Math.ceil(data.productsTotalCount / productsPerPage);
  const hasPagination = totalPages > 1;
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;
  const showFirstPage = page > pageOffset + 1;
  const showLastPage = page < totalPages - pageOffset;
  const showNextEllipsis = page < totalPages - pageOffset - 1;
  const showPrevEllipsis = page > pageOffset + 2;

  const handlePageChange = (e, pageIndex) => {
    e.preventDefault();

    searchParams.set("page", pageIndex);
    setSearchParams(searchParams);
  };

  const getPaginationItems = () => {
    const items = [page];

    // pages before current
    for (let i = 1; i <= pageOffset; i++) {
      if (page - i >= 1) {
        items.unshift(page - i);
      }
    }

    // pages after current
    for (let i = 1; i <= pageOffset; i++) {
      if (page + i <= totalPages) {
        items.push(page + i);
      }
    }

    return items;
  };

  return (
    <section>
      <div className="container pb-12 pt-4">
        <Breadcrumbs className="mb-9" />
        <div className="grid gap-16 md:grid-cols-[170px_1fr]">
          <SidebarCatalog className="max-md:hidden" />
          <section>
            <h1 className="-mt-4 mb-6 text-title leading-none">
              {getBreadcrumbLabel(pathname)}
            </h1>
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
                  {data.products.map((product) => (
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

            {hasPagination && (
              <Pagination>
                <PaginationContent>
                  {hasPrevPage && (
                    <PaginationItem>
                      <PaginationPrevious
                        href={`?page=${page - 1}`}
                        onClick={(e) => handlePageChange(e, page - 1)}
                      />
                    </PaginationItem>
                  )}
                  {showFirstPage && (
                    <PaginationItem className="max-md:hidden">
                      <PaginationLink
                        href="?page=1"
                        onClick={(e) => handlePageChange(e, 1)}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {showPrevEllipsis && (
                    <PaginationItem className="max-md:hidden">
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                  {getPaginationItems().map((item) => (
                    <PaginationItem key={item}>
                      <PaginationLink
                        href={`?page=${page}`}
                        isActive={item === page}
                        aria-label={`Go to ${page} page`}
                        onClick={(e) => handlePageChange(e, item)}
                      >
                        {item}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {showNextEllipsis && (
                    <PaginationItem className="max-md:hidden">
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {showLastPage && (
                    <PaginationItem className="max-md:hidden">
                      <PaginationLink
                        href={`?page=${totalPages}`}
                        aria-label={`Go to ${totalPages} page`}
                        onClick={(e) => handlePageChange(e, totalPages)}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {hasNextPage && (
                    <PaginationItem>
                      <PaginationNext
                        href={`?page=${page + 1}`}
                        onClick={(e) => handlePageChange(e, page + 1)}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </section>
        </div>
      </div>
      <Subscription />
    </section>
  );
};

export { Catalog };
