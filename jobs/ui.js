const Arena = require('bull-arena');
const config = require('../config');
const { htmlParserQueue, videoTranscodingQueue } = require('.');

const queues = [htmlParserQueue, videoTranscodingQueue];

const ui = Arena({
  queues: queues.map(q => ({
    name: q.name,
    hostId: 'queues',
    redis: {
      host: config.environment.REDIS_HOST,
      port: config.environment.REDIS_PORT,
    }
  }))
}, {
  disableListen: true,
});

module.exports = ui;
