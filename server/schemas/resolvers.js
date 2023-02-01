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
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      return await User.create(input);
    },
    updateUser: async (parent, { id, input }) => {
      return await User.findByIdAndUpdate(id, input, { new: true });
    },
    deleteUser: async (parent, { id }) => {
      return await User.findByIdAndRemove(id);
    },
    createQuiz: async (parent, { input }) => {
      return Quiz.create(input);
    },
    updateQuiz: async (parent, { id, input }) => {
      return await Quiz.findByIdAndUpdate(id, input, { new: true });
    },
    deleteQuiz: async (parent, { id }) => {
      return await Quiz.findByIdAndRemove(id);
    },
    createSubject: async (parent, { input }) => {
      return await Subject.create(input);
    },
    updateSubject: async (parent, { id, input }) => {
      return await Subject.findByIdAndUpdate(id, input, { new: true });
    },
    deleteSubject: async (parent, { id }) => {
      return await Subject.findByIdAndRemove(id);
    },
    createDifficulty: async (parent, { input }) => {
      return Difficulty.create(input);
    },
    updateDifficulty: async (parent, { id, input }) => {
      return await Difficulty.findByIdAndUpdate(id, input, { new: true });
    },
    deleteDifficulty: async (parent, { id }) => {
      return await Difficulty.findByIdAndRemove(id);
    },
    createQuestion: async (parent, { input }) => {
      return await Question.create(input);
    },
    updateQuestion: async (parent, { id, input }) => {
      return await Question.findByIdAndUpdate(id, input, { new: true });
    },
    deleteQuestion: async (parent, { id }) => {
      return await Question.findByIdAndRemove(id);
    },
    createQuestionType: async (parent, { input }) => {
      return QuestionType.create(input);
    },
    updateQuestionType: async (parent, { id, input }) => {
      return await QuestionType.findByIdAndUpdate(id, input, { new: true });
    },
    deleteQuestionType: async (parent, { id }) => {
      return await QuestionType.findByIdAndRemove(id);
    },
    createScoreboard: async (parent, { input }) => {
      return Scoreboard.create(input);
    },
    updateScoreboard: async (parent, { id, input }) => {
      return await Scoreboard.findByIdAndUpdate(id, input, { new: true });
    },
    deleteScoreboard: async (parent, { id }) => {
      return await Scoreboard.findByIdAndRemove(id);
    },
    createPost: async (parent, { input }) => {
      return Post.create(input);
    },
    updatePost: async (parent, { id, input }) => {
      return await Post.findByIdAndUpdate(id, input, { new: true });
    },
    deletePost: async (parent, { id }) => {
      return await Post.findByIdAndRemove(id);
    },
    createComment: async (parent, { input }) => {
      return Comment.create(input);
    },
    updateComment: async (parent, { id, input }) => {
      return await Comment.findByIdAndUpdate(id, input, { new: true });
    },
    deleteComment: async (parent, { id }) => {
      return await Comment.findByIdAndRemove(id);
    }
  }
}
module.exports = resolvers;
