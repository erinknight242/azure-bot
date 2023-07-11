const { random } = require('../utils/utils');

module.exports = (app) => {
  app.message(/beer/i, async ({ message }) => {
    await react(message, ['beer', 'beers', 'beer-parrot', 'happy_beer']);
  });
  app.message(/coffee/i, async ({ message }) => {
    await react(message, ['coffee', 'coffeedance', 'coffeeparrot']);
  });

  const react = async (message, emojiSet) => {
    // react 60% of the time, so it feels spontaneous when it does happen
    if (random() < 6) {
      const timestamp = message.ts;
      const channel = message.channel;
      const emojiName = emojiSet[random(emojiSet.length)];
      try {
        await app.client.reactions.add({ name: emojiName, channel, timestamp });
      } catch (err) {
        console.error(`Error adding reaction '${emojiName}': ${err}`);
      }
    }
  };
};
