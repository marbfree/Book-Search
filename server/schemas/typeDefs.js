const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String 
    savedBooks: [Book]
  }

  type Mutation {
    saveBook(body: saveBookInput): User
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteBook(bookId: String!): User
  }

  input saveBookInput {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;