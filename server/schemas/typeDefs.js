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
    decisions(username: String): [Decision]
    decision(_id: ID!): Decision
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): User
    addDecision(decisionText: String!): Decision
    # TODO: update decision
    # TODO: remove decision
  }
`

module.exports = typeDefs