const { App } = require('@slack/bolt');
const beer = require('./scripts/beer');
const coffee = require('./scripts/coffee');
const helloWorld = require('./scripts/helloworld');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false,
  appToken: process.env.SLACK_APP_TOKEN
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();

// Until we get bundling happening properly, you'll have to list any modules manually here:
beer(app);
coffee(app);
helloWorld(app);
