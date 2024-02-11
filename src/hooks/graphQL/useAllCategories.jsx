import { useQuery } from "graphql-hooks";

const query = `query getAllCategories($first: IntType) {
    allCategories(
      orderBy: _createdAt_ASC,
      first: $first,
    ) {
      id
      slug
      title
      image {
        responsiveImage {
          src
          width
          height
          alt
        }
      }
    }
  }`;

const useAllCategories = ({ first }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      first,
    },
  });

  return { loading, error, data: data?.allCategories };
};

export { useAllCategories };
