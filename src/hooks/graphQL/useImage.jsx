import { useQuery } from "graphql-hooks";

const image = `
  query image($type: String!) {
    upload(
      filter: {
        alt: {
          matches: { pattern: $type }
        }
      }
    ) {
      id
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
`;

const useImage = (type) => {
  const { loading, error, data } = useQuery(image, {
    variables: { type },
  });

  if (loading || error) return;

  return data.upload.responsiveImage;
};

export default useImage;
