import { useQuery } from "graphql-hooks";

const logo = `query mainLogo($type: String!) {
  upload(filter: {alt: {matches: {pattern: $type}}}) {
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
}`;

const useLogo = (type) => {
  const { data } = useQuery(logo, {
    variables: { type },
  });

  return data?.upload?.responsiveImage;
};

export default useLogo;
