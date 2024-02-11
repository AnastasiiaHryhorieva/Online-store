import { useQuery } from "graphql-hooks";

const query = `
  query getAllProducts(
    $category: String,
    $serchTerm: String!,
    $priceMin: IntType,
    $priceMax: IntType,
    $sort: [ProductModelOrderBy],
  ) {
    allProducts(
      orderBy: $sort,
      filter: {
        title: {
          matches: { pattern: $serchTerm }
        },
        category: {
          eq: $category
        }
        price: {
          gte: $priceMin,
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

const useAllProducts = ({ category, serchTerm, priceMin, priceMax, sort }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      category,
      serchTerm,
      priceMin,
      priceMax,
      sort,
    },
  });

  return { loading, error, data: data?.allProducts };
};

export { useAllProducts };
