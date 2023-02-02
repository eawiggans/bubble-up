import { gql } from '@apollo/client';

const QUERY_USERS = gql`
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
  }`;

const QUERY_ME = gql`
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
  }`;

const QUERY_PROMPTS = gql`
  query GetPrompts {
    getPrompts {
      _id
      prompt
      solutions {
        response
        username
        feedback {
          thoughts
          username
        }
      }
    }
  }`;

const QUERY_SOLUTIONS = gql`
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
  }`;

const QUERY_ALL_FEEDBACK = gql`
  query GetAllFeedback {
    getAllFeedback {
      _id
      thoughts
      username
    }
  }`;

module.exports = { QUERY_USERS, QUERY_PROMPTS, QUERY_SOLUTIONS, QUERY_ALL_FEEDBACK, QUERY_ME };
