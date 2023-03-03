const { random } = require('../utils/utils');

module.exports = (app) => {
  app.message('coffee', async ({ message, say }) => {
    if (random(100) >= 70)
    await say("Coffee? How about a beer? :beer:");
  });
}
