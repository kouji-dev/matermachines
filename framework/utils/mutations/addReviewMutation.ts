import gql from "graphql-tag";

export const ADD_REVIEW_MUTATION = gql`
  mutation writeReview($rating: Int!, $commentOn: Int!, $author: String!) {
    writeReview(
      input: {
        rating: $rating
        commentOn: $commentOn
        content: ""
        author: $author
      }
    ) {
      rating
    }
  }
`;

export interface AddReviewData {
  writeReview: {
    rating: number;
  };
}

export interface AddReviewVars {
  rating: number;
  commentOn: number;
  author: string;
}
