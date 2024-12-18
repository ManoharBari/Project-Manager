const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssignmentSchema = new Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
