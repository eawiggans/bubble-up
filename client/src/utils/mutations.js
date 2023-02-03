import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation AddUser($newUser: Signup!) {
    addUser(newUser: $newUser) {
      token
      user {
        _id
        email
        firstName
        lastName
        password
        username
      }
    }
  }`;

export const LOGIN = gql`
mutation Login($userCred: Login!) {
  login(userCred: $userCred) {
    token
    user {
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
}`;

export const ADD_INTERVIEW = gql`
mutation SubmitInterviewPrompt($interviewForm: NewInfo!) {
  submitInterviewPrompt(interviewForm: $interviewInfo) {
    interviewInfo {
      username
      location
      position
      subject
      prompt
      response
      
    }
  }
}`;