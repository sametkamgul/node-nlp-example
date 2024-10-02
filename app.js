const { NlpManager } = require("node-nlp");
const path = require("path");
const fs = require("fs");

const nlpManager = new NlpManager({ ner: { threshold: 1 } });

const filePath = path.join(process.cwd(), "lib/model.nlp");

const data = fs.readFileSync(filePath, "utf8");

nlpManager.import(data);

nlpManager.process("en", "hello").then((response) => {
  console.log(response.answer);
});
