import { gql } from '@apollo/client';

export const QUERY_DECISIONS = gql`
  query getDecisions($username: String) {
    decisions(username: $username) {
      username
      decisionText     
    }
  }
`;

export const QUERY_DECISION = gql`
  query getDecision($id: ID!) {
  decision(_id: $id) {
    _id
    decisionText
    username
  }
}
`