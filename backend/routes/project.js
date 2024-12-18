const express = require("express");
const router = express.Router();
const createProject = require("../controller/projectController");
const getProjects = require("../controller/projectController");
const updateProject = require("../controller/projectController");
const deleteProject = require("../controller/projectController");
const Admin = require("../controller/authController");
const fetchuser = require("../middleware/fetchuser");

router.post("/", fetchuser, Admin, createProject);
router.get("/", fetchuser, Admin, getProjects);
router.put("/:id", fetchuser, Admin, updateProject);
router.delete("/:id", fetchuser, Admin, deleteProject);

module.exports = router;
