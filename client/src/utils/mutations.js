import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $userName, email: $email, password: $password) {
      _id
      username
      email
      password
      savedBooks {
        bookSchema
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($authors: String!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
    addUser(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      _id
      authors
      description
      bookId
      image
      link
      title
      }
    }
  }
`;