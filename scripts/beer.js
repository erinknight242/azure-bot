const { random } = require('../utils/utils');

quips = [
	"In wine there is wisdom, in beer there is freedom, in water there is bacteria",
	"Hello? Is it beer you're looking for?",
	"Keep calm, it's beer o'clock",
	":dos_equis: I don't always drink beer, just kidding, or course I do.",
	"Beauty is in the eye of the beer holder",
	"Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
	"24 hours in a day, 24 beers in a case. Coincidence?",
	"Alcohol: the cause of, and solution to, all of life's problems.",
	":beer:",
	":shiner:",
	":lone_star:"
]

module.exports = (app) => {
  app.message('beer', async ({ message, say }) => {
    if(random(100) >= 40) {
      await say(quips[random(quips.length)]);
    }
  });
}
