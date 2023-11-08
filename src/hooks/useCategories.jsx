import { useQuery } from "graphql-hooks";

const categoriesMain = `query MyQuery {
    allCategories {
      slug
      id
      categoryTitle
      date
      categoryImage {
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
    }
  }`;

const useCategoriesMain = () => {
  const { loading, error, data } = useQuery(categoriesMain);

  return { loading, error, data };
};

export default useCategoriesMain;
