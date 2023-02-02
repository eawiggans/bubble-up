const db = require('../config/connection');
const { User, Quiz, Prompt, Solution, Feedback, InterviewInfo } = require('../models');
const { create } = require('../models/Solution');
const userSeeds = require('./userSeeds.json');
const promptSeeds = require('./promptSeeds.json')

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
    await Prompt.create(promptSeeds);

    // const prompt = await Prompt.find({ prompt: /object oriented programming/i });

    console.log(prompt);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});