const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controller/projectController");
const Admin = require("../controller/authController");
const fetchuser = require("../middleware/fetchuser");

router.post("/", fetchuser, Admin, createProject);
router.get("/", fetchuser, Admin, getProjects);
router.put("/:id", fetchuser, Admin, updateProject);
router.delete("/:id", fetchuser, Admin, deleteProject);

module.exports = router;
