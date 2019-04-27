const config = require('./config');
const app = require('./app');

app.listen(config.environment.PORT, () => {
  console.log(`Server listening on ${config.environment.PORT}`);
});
