import { useQuery } from "graphql-hooks";

const query = `
  query getProductsByCategory($category: String) {
    allProducts(
      orderBy: _createdAt_ASC
      first: "3"
      filter: {
        category: { eq: $category }
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
      categories {
        id
        slug
        categoryTitle
      }
      colors {
        color {
          hex
        }
      }
    }
  }
`;

const useProductsByCategory = (category) => {
  const { loading, error, data } = useQuery(query, {
    variables: { category },
  });

  return { loading, error, data: data?.allProducts };
};

export { useProductsByCategory };
