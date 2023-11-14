import { useQuery } from "graphql-hooks";

const socials = `query MyQuery {
    allUploads(filter: {alt: {matches: {pattern: "social"}}}) {
      alt
      url
      id
    }
  }
`;

const useSocials = () => {
  const { data } = useQuery(socials);

  return data;
};

export default useSocials;
