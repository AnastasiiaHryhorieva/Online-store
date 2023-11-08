import { useQuery } from "graphql-hooks";

const products = `query Products($category: String) {
    allProducts(
      orderBy: _createdAt_ASC
      first: "3"
      filter: {priceCategory: {eq: $category}}
    ) {
      title
      id
      discount
      priceCategory
      image {
        responsiveImage {
          src
          width
          height
          title
          alt
          sizes
          base64
          bgColor
        }
      }
      price
      salePrice
      sale
      slug
      color {
        hex
      }
      color2 {
        hex
      }
      color3 {
        hex
      }
      color4 {
        hex
      }
      color5 {
        hex
      }
      typeCategory
    }
  }`;

const useProductsMainPage = (category) => {
  const { loading, error, data } = useQuery(products, {
    variables: { category },
  });

  return { loading, error, data };
};

export default useProductsMainPage;
