import { useQuery } from "graphql-hooks";

const allProducts = `
  query allProducts(
    $category: String, 
    $priceMin: FloatType, 
    $priceMax: FloatType
  ) {
    allProducts(
      filter: {
        category: { eq: $category },
        AND: {
          OR: {
            price: { gte: $priceMin },
        AND: { 
          price: { lte: $priceMax }
        }}}}
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

const useAllProducts = (category, priceMin, priceMax) => {
  const { loading, error, data } = useQuery(allProducts, {
    variables: category,
    priceMin,
    priceMax,
  });

  return { loading, error, data };
};

export default useAllProducts;
