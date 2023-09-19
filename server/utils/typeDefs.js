const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: 
  }

  type Query {
    book(bookId: ID!): Book
    user(userId: ID!): User
  }

  type Mutation {
    saveBook(authors: String!, description: String!, bookId: String!, image: String!, link: String!, title, String!): Book
    createUser(username: String!, email: String!, password: String!)
    getSingleUser(userId: ID!)
    login(username: String!, email: String!, password: String!)
    deleteBook(bookId: ID!)
    deleteUser(userId: ID!)
  }
`;

module.exports = typeDefs;