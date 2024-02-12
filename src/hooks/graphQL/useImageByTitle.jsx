import { useQuery } from "graphql-hooks";

const query = `
  query getImageByTitle($title: String!) {
    upload(
      filter: {
        title: {
          matches: { pattern: $title }
        }
      }
    ) {
      responsiveImage {
        src
        width
        height
        alt
      }
    }
  }
`;

const useImageByTitle = (title) => {
  const { loading, error, data } = useQuery(query, {
    variables: { title },
  });

  return { loading, error, data: data?.upload?.responsiveImage };
};

export { useImageByTitle };
