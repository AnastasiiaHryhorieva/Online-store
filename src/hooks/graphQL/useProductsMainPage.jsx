import { useQuery } from "graphql-hooks";

const products = `
  query Products($category: String) {
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
  }`;

const useProductsMainPage = (category) => {
  const { data } = useQuery(products, {
    variables: { category },
  });

  return { data };
};

export default useProductsMainPage;
