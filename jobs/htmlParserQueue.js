const Bull = require('bull');
const config = require('../config');

const queue = new Bull('html-parsing-queue', {
  redis: {
    host: config.environment.REDIS_HOST,
    port: config.environment.REDIS_PORT
  }
});

queue.process(async (job, done) => {
  console.log('====================================');
  console.log(`Processing ${job.queue.name} Job ID ${job.id}`);
  console.log('====================================');
  done(null);
});

module.exports = queue;
