import { gql } from '@apollo/client';

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const GET_ALL_INTERVIEWS = gql`
  query getAllInterviewInfo {
    interviewInfo {
        _id
        location
        position
        subject
        prompt
        response
        resFeedback: {
          thoughts
          username
        }
      }
    }
  }
`;

