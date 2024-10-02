const { NlpManager } = require("node-nlp");
const manager = new NlpManager({
  languages: ["en"],
  autoSave: false,
});

manager.addDocument("en", "Hi", "greetings.info");
manager.addDocument("en", "Hello", "greetings.info");

manager.addAnswer(
  "en",
  "greetings.info",
  "Hi, How can I help you?"
);

module.exports = manager;
