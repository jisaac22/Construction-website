const db = require('../config/connection');
const { Worker } = require('../models');
const workerSeeds = require('./workerSeeds.json');

db.once('open', async () => {
  try {
    await Worker.deleteMany({});
    await Worker.create(workerSeeds);

    console.log('Completed')
    process.exit(0);
  } catch (err) {
    throw err
  }
});