import { useQuery } from "graphql-hooks";

const query = `
  query getProdoctBySlug($slug: String) {
    product(
      filter: {
        slug: { eq: $slug }
      }
    ) {
      id
      title
      description
      composition
      care
      price
      discount
      category
      isnew
      isavailable
      slug
      image {
        responsiveImage {
          alt
          base64
          height
          sizes
          src
          title
          width
          bgColor
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

const useProductBySlug = (slug) => {
  const { loading, error, data } = useQuery(query, {
    variables: { slug },
  });

  return { loading, error, data };
};

export { useProductBySlug };
