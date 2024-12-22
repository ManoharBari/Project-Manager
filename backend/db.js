const mongoose = require("mongoose");

main()
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://manoharkale5368:Manohar2004@projectmanager.ulkve.mongodb.net/?retryWrites=true&w=majority&appName=ProjectManager");
}

module.exports = main;
