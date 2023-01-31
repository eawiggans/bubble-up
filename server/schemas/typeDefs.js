const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    scores: [Score]!
  }

  type Quiz {
    _id: ID!
    difficulty: String!
    questions: [Question]!
    subject: String!
    timeLimit: Int!
  }

  type Question {
    _id: ID!
    text: String!
    answer: String!
    type: QuestionType
    level: Level
    subject: Subject
  }

  type QuestionType {
    _id: ID!
    name: String!
    questions: [Question]!
  }

  type Difficulty {
    _id: ID!
    name: String!
    pointModifier: Float
    questions: [Question]
  }

  type Subject {
    _id: ID!
    name: String!
    questions: [Question]!
  }

  type Scoreboard {
    _id: ID!
    userId: ID!
    quizId: ID!
    score: Int!
    dateOfCompletion: String!
  }

  type Post {
    _id: ID!
    title: String!
    message: String!
    user: User
    createdAt: String!
  }

  type Comment {
    _id: ID!
    message: String!
    userId: User
    postId: Post
    createdAt: String
  }
  

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
