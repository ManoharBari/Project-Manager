const mongoose = require("mongoose");

main()
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Project_Manager");
}

module.exports = main;
