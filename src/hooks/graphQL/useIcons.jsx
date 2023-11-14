import { useQuery } from "graphql-hooks";

const icons = `query getIcon($icon: String!) {
    upload(filter: {alt: {matches: {pattern: $icon}}}) {
      alt
      url
      id
    }
  }
`;

const useIcons = (icon) => {
  const { data } = useQuery(icons, {
    variables: { icon },
  });

  return data?.upload;
};

export default useIcons;
