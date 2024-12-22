const mongoose = require("mongoose");

main()
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://manoharkale5368:9EmOzOrAAlGHLRAg@notebook.m8rua.mongodb.net/?retryWrites=true&w=majority&appName=Notebook");
}

module.exports = main;
