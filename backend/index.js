const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const assignmentRoutes = require("./routes/assignment");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/assign", assignmentRoutes);

app.get("/", (req, res) => {
  res.send("Project Manager Backend Working!");
});

module.exports = app;
