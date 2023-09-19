import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser {
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
