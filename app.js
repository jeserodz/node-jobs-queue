const express = require('express');
const jobs = require('./jobs');

jobs.htmlParserQueue.add(null, {
  repeat: { every: 2500 }
});

jobs.videoTranscodingQueue.add({ videoURL: 'https://example.com/videos/hey.mp4' }, {
  repeat: { every: 5000 }
});

const app = express();

app.use('/jobs', jobs.ui);

app.get('/', (req, res) => {
  res.redirect('/jobs');
});

module.exports = app;
