const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./api/auth");
const projectRoutes = require("./api/project");
const assignmentRoutes = require("./api/assignment");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/assign", assignmentRoutes);

app.get("/", (req, res) => {
  res.send(`<h1> I am Working </h1>`);
});

app.listen(8080, () => {
  console.log("app listen on port 8080");
});
