const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: string!
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Auth {
  token: String!
  user: User
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    
    login(email: String!, password: String!): Auth
    addUser(email: String!, username: String!, password: String!): Auth
    saveBook(authors: [String!],description: String!, title: String!, image: String, link: String, bookId: string! ): User
    removeBook(bookId: string!): User
  }
`;

module.exports = typeDefs;