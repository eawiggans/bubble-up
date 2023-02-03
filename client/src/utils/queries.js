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
  }`;

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
  }`;

  export const QUERY_PROMPTS = gql`
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
  }`;

  export const QUERY_ALL_FEEDBACK = gql`
  query GetAllFeedback {
    getAllFeedback {
      _id
      thoughts
      username
    }
  }`;

  export const QUERY_INTERVIEWS = gql`
  query GetAllInterviewInfo {
    getAllInterviewInfo {
      _id
      username
      location
      position
      subject
      prompt
      response
      resFeedback
    }
  }`;


