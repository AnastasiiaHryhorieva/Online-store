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
  ) {
    _allProductsMeta(
      filter: {
        title: {
          matches: { pattern: $searchTerm }
        },
        category: {
          eq: $category
        }
        price: {
          gte: $priceMin
          lte: $priceMax
        }
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
        }
        price: {
          gte: $priceMin
          lte: $priceMax
        }
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
