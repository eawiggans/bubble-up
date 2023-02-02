const db = require('../config/connection');
const { User, Quiz, Prompt, Solution, Feedback, InterviewInfo } = require('../models');
const { create } = require('../models/Solution');
const userSeeds = require('./userSeeds.json');
const promptSeeds = require('./promptSeeds.json');
const solutionSeeds = require('./solutionSeeds.json');

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
    for (let i = 0; i < solutionSeeds.length; i++) {
      const questionKey = solutionSeeds[i].questionKey;
      delete solutionSeeds[i].questionKey;
      console.log(solutionSeeds[i], questionKey);

      const { _id: solutionId, username } = await Solution.create(solutionSeeds[i]);
      console.log('Solution ID:', solutionId);

      await User.findOneAndUpdate(
        { username },
        { $addToSet: { solutions: solutionId } },
        { runValidators: true }
      );

      const { _id: promptId } = await Prompt.findOneAndUpdate(
        { prompt: { $regex: questionKey } },
        { $addToSet: { solutions: solutionId } }
      );
      console.log('Prompt ID:', promptId);

      await Solution.findByIdAndUpdate(
        solutionId,
        { promptId }
      );
    }

  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});