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

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    decision(_id: ID!): Decision
    decisions(username: String): [Decision]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addDecision(decisionText: String!): Decision
  }
`

module.exports = typeDefs