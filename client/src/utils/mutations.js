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

export const ADD_SOLUTION = gql`
mutation AddSolution($addSolutionId: ID!, $newSolution: NewSolution!) {
  addSolution(id: $addSolutionId, newSolution: $newSolution) {
    username
    response
  }
}`;

export const EDIT_SOLUTION = gql`
mutation EditSolution($editSolutionId: ID!, $response: String!) {
  editSolution(id: $editSolutionId, response: $response) {
    username
    response
  }
}`;

export const REMOVE_SOLUTION = gql`
mutation RemoveSolution($removeSolutionId: ID!) {
  removeSolution(id: $removeSolutionId) {
    username
    response
  }
}`;

export const ADD_FEEDBACK = gql`
mutation AddFeedback($addFeedbackId: ID!, $newFeedback: NewFeedback!) {
  addFeedback(id: $addFeedbackId, newFeedback: $newFeedback) {
    username
    thoughts
  }
}`;

export const EDIT_FEEDBACK = gql`
mutation EditFeedback($editFeedbackId: ID!, $thoughts: String!) {
  editFeedback(id: $editFeedbackId, thoughts: $thoughts) {
    username
    thoughts
  }
}`;

export const REMOVE_FEEDBACK = gql`
mutation RemoveFeedback($removeFeedbackId: ID!) {
  removeFeedback(id: $removeFeedbackId) {
    username
    thoughts
  }
}`;

export const SUBMIT_INFO = gql`
mutation SubmitInterviewPrompt($interviewForm: NewInfo!) {
  submitInterviewPrompt(interviewForm: $interviewForm) {
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
