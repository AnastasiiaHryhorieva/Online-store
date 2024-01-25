import { useQuery } from "graphql-hooks";

const categoriesMain = `query MyQuery {
    allCategories(
      orderBy: _createdAt_ASC
      first: "3"
    ) {
      id
      slug
      categoryTitle
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
