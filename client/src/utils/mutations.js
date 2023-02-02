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

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_POST = gql`
//   mutation addPost(
//     $post
//   )`