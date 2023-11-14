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
  const { data } = useQuery(categoriesMain);

  return data;
};

export default useCategoriesMain;
