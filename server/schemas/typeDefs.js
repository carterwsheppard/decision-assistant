const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Decision {
    _id: ID
    decisionText: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    decisions(username: String!): [Decision]
    decision(_id: ID!): Decision
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    deleteAllUsers: [User]
    login(email: String!, password: String!): Auth
    addDecision(decisionText: String!): Decision
    updateDecision(_id: ID!, decisionText: String!): Decision
    deleteDecision(_id: ID!): Decision
    deleteAllDecisions: Auth
  }
`

module.exports = typeDefs