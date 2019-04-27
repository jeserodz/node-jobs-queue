const Bull = require('bull');
const queue = new Bull('video-transcoding-queue');

queue.process(async job => {
  console.log('====================================');
  console.log(`Processing ${job.queue.name} Job ID ${job.id}...`);
  console.log('====================================');
});

module.exports = queue;
