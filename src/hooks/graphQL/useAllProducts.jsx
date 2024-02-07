import { useQuery } from "graphql-hooks";

const query = `
  query getAllProducts(
    $category: String,
    $serchTerm: String!,
    $priceMin: IntType,
    $priceMax: IntType,
  ) {
    allProducts(
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
          alt
          base64
          bgColor
          height
          sizes
          src
          width
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

const useAllProducts = ({ category, serchTerm, priceMin, priceMax }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      category,
      serchTerm,
      priceMin,
      priceMax,
    },
  });

  return { loading, error, data: data?.allProducts };
};

export { useAllProducts };
