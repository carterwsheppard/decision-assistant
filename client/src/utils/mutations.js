import { gql } from '@apollo/client'

export const MUTATION_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
      }
    }
  }
`

export const MUTATION_ADDDECISION = gql`
  mutation addDecision($decisionText: String!) {
  addDecision(decisionText: $decisionText) {
    _id
    decisionText
    username
    }
  }
`

export const MUTATION_UPDATEDECISION = gql`
  mutation updateDecision($id: ID!, $decisionText: String!) {
  updateDecision(_id: $id, decisionText: $decisionText) {
    _id
    decisionText
    username
    }
  }
`

export const MUTATION_DELETEDECISION = gql`
  mutation deleteDecision($id: ID!) {
  deleteDecision(_id: $id) {
    _id
    }
  } 
`
export const MUTATION_DELETEALLDECISIONS = gql`
  mutation deleteAllDecisions {
  deleteAllDecisions {
    user {
      username
      }
    }
  }
`

export const MUTATION_SIGNUP = gql` 
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
}`