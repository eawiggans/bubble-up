const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    // Delete all existing User documents
    await User.deleteMany({});

    // Create new User documents
    for (const seed of userSeeds) {
      await User.create(seed);
    }

  } catch (error) {
    console.log(error);
  }
});