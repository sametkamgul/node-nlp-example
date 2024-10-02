// post script to create model.nlp

const manager = require("../lib/nlpGenerator");
const path = require("path");

const buildModel = async () => {
  const filePath = path.join(process.cwd(), "lib/model.nlp")

  await manager.train();
  await manager.save(filePath);
};

buildModel();
