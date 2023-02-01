const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    scores: [Score]
    posts: [Post]
    comments: [Comment]
  }

  input Signup {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }

  input Login {
    username: String
    email: String
    password: String!
  }

  input UpdateUser {
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
  }

  type Quiz {
    _id: ID!
    difficulty: String
    questions: [Question]
    subject: String
    timeLimit: Int
  }

  type Question {
    _id: ID!
    type: QuestionType
    text: String!
    answer: String!
    hint: [String]
    followUp: [Question]
    feedback: String
    expectedTime: Int
  }

  type QuestionType {
    _id: ID!
    name: String!
  }

  type Difficulty {
    _id: ID!
    name: String!
    pointModifier: Float
  }

  type Subject {
    _id: ID!
    name: String!
  }

  type Score {
    _id: ID!
    userId: User
    quizId: Quiz
    score: Int
    dateOfCompletion: String
  }

  input NewScore {
    _id: ID!
    username: ID!
    quiz: ID!
    score: Int!
  }

  type Post {
    _id: ID!
    title: String!
    message: String!
    user: User
    comments: [Comment]
    createdAt: String
  }

  input NewPost {
    title: String!
    message: String!
    user: User
  }

  input UpdatedPost {
    title: String!
    message: String!
  }

  type Comment {
    _id: ID!
    message: String!
    userId: User
    postId: Post
    createdAt: String
  }


  input NewComment {
    message: String!
    userId: User!
    postId: Post!
  }

  input UpdatedComment {
    message: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    quizzes: [Quiz]
    quiz(id: ID!): Quiz
    subjects: [Subject]
    subject(id: ID!): Subject
    difficulties: [Difficulty]
    difficulty(id: ID!): Difficulty
    questions: [Question]
    question(id: ID!): Question
    questionTypes: [QuestionType]
    questionType(id: ID!): QuestionType
    Scores: [Score]
    Score(id: ID!): Score
    posts: [Post]
    post(id: ID!): Post
    comments: [Comment]
    comment(id: ID!): Comment
    me: User
  }

  type Mutation {
    createUser(input: Signup!): Auth!
    updateUser(id: ID!, input: UpdateUser!): User!
    deleteUser(id: ID!): User!
    login(input: Login!): Auth!
    createScore(input: NewScore!): Score!
    deleteScore(id: ID!): Score!
    createPost(input: NewPost!): Post!
    updatePost(id: ID!, input: UpdatedPost!): Post!
    deletePost(id: ID!): Post!
    createComment(input: NewComment!): Comment!
    updateComment(id: ID!, input: UpdatedComment!): Comment!
    deleteComment(id: ID!): Comment!
  }
`;

module.exports = typeDefs;
