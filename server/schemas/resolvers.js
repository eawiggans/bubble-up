import { AuthenticationError } from "apollo-server-express";
import { Comment, Difficulty, Post, Question, QuestionType, Quiz, Scoreboard, Subject, User } from "../models/index";

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.find({});
    },
    user: async (parent, { id }) => {
      return await User.findById(id);
    },
    quizzes: async (parent, args) => {
      return await Quiz.find({});
    },
    quiz: async (parent, { id }) => {
      return await Quiz.findById(id);
    },
    questions: async (parent, args) => {
      return await Question.find({});
    },
    question: async (parent, { id }) => {
      return await Question.findById(id);
    },
    questionTypes: async (parent, args) => {
      return await QuestionType.find({});
    },
    questionType: async (parent, { id }) => {
      return await QuestionType.findById(id);
    },
    difficulties: async (parent, args) => {
      return await Difficulty.find({});
    },
    difficulty: async (parent, { id }) => {
      return await Difficulty.findById(id);
    },
    subjects: async (parent, args) => {
      return await Subject.find({});
    },
    subject: async (parent, { id }) => {
      return await Subject.findById(id);
    },
    scoreboards: async (parent, args) => {
      return await Scoreboard.find({});
    },
    scoreboard: async (parent, { id }) => {
      return await Scoreboard.findById(id);
    },
    posts: async (parent, args) => {
      return await Post.find({});
    },
    post: async (parent, { id }) => {
      return await Post.findById(id);
    },
    comments: async (parent, args) => {
      return await Comment.find({});
    },
    comment: async (parent, { id }) => {
      return await Comment.findById(id);
    },
    me: async (parent, args, context) => {
      if(context.user) {
        return await User.findOne({ username: context.user.username });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }

}
module.exports = resolvers;
