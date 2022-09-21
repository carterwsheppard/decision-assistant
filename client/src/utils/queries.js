import { gql } from '@apollo/client';

export const QUERY_DECISIONS = gql`
  query getDecisions($usernamey: String) {
    decisions(username: $username) {
     
      username
      decisionText     }
  }
`;