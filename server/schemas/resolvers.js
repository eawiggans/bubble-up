const { AuthenticationError } = require('apollo-server-express');
const { Comment, Difficulty, Post, Question, QuestionType, Quiz, Score, Subject, User } = require('../models/index');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.find({}).populate('scores posts comments');
    },
    user: async (parent, { id }) => {
      return await User.findById(id).populate('scores posts comments');
    },
    quizzes: async (parent, args) => {
      return await Quiz.find({}).populate('difficulty questions subject');
    },
    quiz: async (parent, { id }) => {
      return await Quiz.findById(id).populate('difficulty questions subject');
    },
    subjects: async (parent, args) => {
      return await Subject.find({});
    },
    subject: async (parent, { id }) => {
      return await Subject.findById(id);
    },
    difficulties: async (parent, args) => {
      return await Difficulty.find({});
    },
    difficulty: async (parent, { id }) => {
      return await Difficulty.findById(id);
    },
    questions: async (parent, args) => {
      return await Question.find({}).populate('type followup');
    },
    question: async (parent, { id }) => {
      return await Question.findById(id).populate('type followup');
    },
    questionTypes: async (parent, args) => {
      return await QuestionType.find({});
    },
    questionType: async (parent, { id }) => {
      return await QuestionType.findById(id);
    },
    scores: async (parent, args) => {
      return await Score.find({}).populate('user quiz');
    },
    score: async (parent, { id }) => {
      return await Score.findById(id);
    },
    posts: async (parent, args) => {
      return await Post.find({}).populate('user comments');
    },
    post: async (parent, { id }) => {
      return await Post.findById(id).populate('user comments');
    },
    comments: async (parent, args) => {
      return await Comment.find({}).populate('post user');
    },
    comment: async (parent, { id }) => {
      return await Comment.findById(id).populate('post user');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ username: context.user.username });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { id, input }) => {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      const token = signToken(user);
      return { token, user };
    },
    deleteUser: async (parent, { id }) => {
      return await User.findByIdAndRemove(id);
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createScore: async (parent, { input }) => {
      return await Score.create(input);
    },
    createPost: async (parent, { input }) => {
      return await Post.create(input);
    },
    updatePost: async (parent, { id, input }) => {
      return await Post.findByIdAndUpdate(id, input, { new: true });
    },
    deletePost: async (parent, { id }) => {
      return await Post.findByIdAndRemove(id);
    },
    createComment: async (parent, { input }) => {
      return await Comment.create(input);
    },
    updateComment: async (parent, { id, input }) => {
      return await Comment.findByIdAndUpdate(id, input, { new: true });
    },
    deleteComment: async (parent, { id }) => {
      return await Comment.findByIdAndRemove(id);
    },
  },
};
module.exports = resolvers;
