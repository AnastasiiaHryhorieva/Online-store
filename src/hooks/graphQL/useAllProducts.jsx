import { useQuery } from "graphql-hooks";

const query = `
  query getAllProducts(
    $category: String,
  ) {
    allProducts(
      filter: {
        category: { eq: $category }
      },
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

const useAllProducts = (category, priceMin, priceMax) => {
  const { loading, error, data } = useQuery(query, {
    variables: { category },
  });

  return { loading, error, data };
};

export { useAllProducts };
