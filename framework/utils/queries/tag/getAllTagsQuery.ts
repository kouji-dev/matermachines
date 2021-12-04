import gql from "graphql-tag";

export const GET_ALL_TAGS_QUERY = gql`
  query getAllTags {
    tags {
      nodes {
        id
        name
      }
    }
  }
`;
