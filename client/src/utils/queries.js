import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getPrompts {
    products {
      _id
      prompt
      solutions {
        response
        username
        feedback
      }
    }
  }
`;