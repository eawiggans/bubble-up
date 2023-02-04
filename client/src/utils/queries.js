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

export const QUERY_PROMPT = gql`
  query getPrompt($promptId: ID!) {
    getPrompt(promptId: $promptId) {
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

export const QUERY_ALL_INTERVIEWS = gql`query GetAllInterviewInfo {
  getAllInterviewInfo {
    _id
    location
    position
    subject
    prompt
    response
    resFeedback
    commFeedBack {
      thoughts
      username
    }
    username
  }
}
`;

export const QUERY_INTERVIEW = gql`query GetInterviewInfo($getInterviewInfoId: ID!) {
  getInterviewInfo(id: $getInterviewInfoId) {
    _id
    commFeedBack {
      _id
      thoughts
      username
      updatedAt
      createdAt
    }
    location
    position
    prompt
    resFeedback
    response
    subject
    username
    updatedAt
    createdAt
  }
}`