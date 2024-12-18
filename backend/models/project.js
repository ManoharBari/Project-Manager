const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
