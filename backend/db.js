const mongoose = require("mongoose");

main()
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://mongo:WUZJUGtryMkLLTYxqkXabYLJCXDzIEya@mongodb.railway.internal:27017/Project_Manager");
}

module.exports = main;
