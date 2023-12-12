import { useQuery } from "graphql-hooks";

const allProducts = `query allProducts($category: String, 
  $priceMin: FloatType, 
  $priceMax: FloatType) {
  allProducts(filter: {typeCategory: {eq: $category}, 
      AND: {OR: {price: {gte: $priceMin}, 
      AND: {price: {lte: $priceMax}}}}}) {
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

const useAllProducts = (category, priceMin, priceMax) => {
  const { loading, error, data } = useQuery(allProducts, {
    variables: category,
    priceMin,
    priceMax,
  });

  return { loading, error, data };
};

export default useAllProducts;
