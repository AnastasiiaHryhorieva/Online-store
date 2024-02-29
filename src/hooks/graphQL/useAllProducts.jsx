import { useQuery } from "graphql-hooks";

const query = `
  query getAllProducts(
    $searchTerm: String!,
    $category: String,
    $priceMin: IntType,
    $priceMax: IntType,
    $sort: [ProductModelOrderBy],
    $first: IntType,
    $skip: IntType,
    $xs: BooleanType,
    $s: BooleanType,
    $m: BooleanType,
    $l: BooleanType,
    $xl: BooleanType,
  ) {
    _allProductsMeta(
      filter: {
        title: {
          matches: { pattern: $searchTerm }
        },
        category: {
          eq: $category
        },
        price: {
          gte: $priceMin
          lte: $priceMax
        },
        sizes: {
          any: {
            size: {
              xs: { eq: $xs },
              small: { eq: $s },
              medium: { eq: $m },
              large: { eq: $l },
              xl: { eq: $xl },
            }
          }
        },
      }
    ) {
      count
    }
    allProducts(
      first: $first,
      skip: $skip,
      orderBy: $sort,
      filter: {
        title: {
          matches: { pattern: $searchTerm }
        },
        category: {
          eq: $category
        },
        price: {
          gte: $priceMin
          lte: $priceMax
        },
        sizes: {
          any: {
            size: {
              xs: { eq: $xs },
              small: { eq: $s },
              medium: { eq: $m },
              large: { eq: $l },
              xl: { eq: $xl },
            }
          }
        },
      }
    ) {
      id
      title
      price
      discount
      isnew
      isavailable
      slug
      image {
        responsiveImage {
          src
          width
          height
          alt
        }
      }
      colors {
        color {
          hex
        }
      }
      sizes {
        xs
        small
        medium
        large
        xl
      }
    }
  }
`;

const useAllProducts = ({
  searchTerm,
  category,
  priceMin,
  priceMax,
  sort,
  first,
  skip,
  xs,
  s,
  m,
  l,
  xl,
}) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      category,
      searchTerm,
      priceMin,
      priceMax,
      sort,
      first,
      skip,
      xs,
      s,
      m,
      l,
      xl,
    },
  });

  return {
    loading,
    error,
    data: {
      products: data?.allProducts,
      productsTotalCount: data?._allProductsMeta.count,
    },
  };
};

export { useAllProducts };
