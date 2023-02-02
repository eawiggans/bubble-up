const db = require('../config/connection');
const { User, Quiz, Prompt, Solution, Feedback, InterviewInfo } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    // Delete all existing User documents
    await User.collection.drop();
    await Quiz.collection.drop();
    await Prompt.collection.drop();
    await Solution.collection.drop();
    await Feedback.collection.drop();
    await InterviewInfo.collection.drop();

    // Create new User documents
    await User.create(userSeeds);

  } catch (error) {
    console.log(error);
  }
});