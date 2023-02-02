import { gql } from '@apollo/client';

export const QUERY_PROMPTS = gql`
  query getPrompts {
    getPrompts {
      _id
      prompt
      solutions {
        response
        username
        feedback {
            thoughts
        }
      }
    }
  }
`;