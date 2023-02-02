import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query GetUsers {
    getUsers {
      _id
      email
      firstName
      lastName
      username
      solutions {
        username
        response
      }
      thoughts {
        username
        thoughts
      }
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      email
      firstName
      lastName
      username
      solutions {
        username
        response
      }
      thoughts {
        username
        thoughts
      }
    }
  }
`;

export const QUERY_PROMPTS = gql`
  query getPrompts {
    getPrompts {
      _id
      prompt
      solutions {
        _id
        feedback {
          thoughts
          username
          _id
        }
        username
        response
      }
    }
  }
`;

export const QUERY_SOLUTIONS = gql`
  query GetSolutions {
    getSolutions {
      _id
      response
      username
      feedback {
        thoughts
        username
      }
    }
  }
`;

export const QUERY_ALL_FEEDBACK = gql`
  query GetAllFeedback {
    getAllFeedback {
      _id
      thoughts
      username
    }
  }
`;
