const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const assignmentRoutes = require("./routes/assignment");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
});

app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);
  res.status(500).json({ error: err.message });
});

connectDB();

app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/assign", assignmentRoutes);

app.post("/app", (req, res) => {
  res.send(`<h1> I am Working </h1>`);
});

app.listen(8080, () => {
  console.log("app listen on port 8080");
});

module.exports = app;
