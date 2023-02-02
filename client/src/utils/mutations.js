import { gql } from "@apollo/client";

const SIGNUP = gql`
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

const LOGIN = gql`
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

module.exports = { SIGNUP, LOGIN };
