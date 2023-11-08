import { useQuery } from "graphql-hooks";

const allProducts = `query allProducts {
  allProducts {
    title
    id
    discount
    priceCategory
    image {
      url
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

const useAllProducts = () => {
  const { loading, error, data } = useQuery(allProducts);

  return { loading, error, data };
};

export default useAllProducts;
