const { random } = require('../utils/utils');

module.exports = (app) => {
  app.message(/deran/i, async ({ message, say }) => {
    if (random(100) <= 20) {
      await say({
        blocks: [
          {
          "type": "image",
          "image_url": "http://i.imgur.com/reDPhBx.jpg",
          "alt_text": "Deran"
        }],

          text: "Hi Deran"
      });
    }
  });
}
