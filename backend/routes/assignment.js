const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
  assignProject,
  getAssignments,
  updateAssignment,
} = require("../controller/assignmentController");

router.post("/", fetchuser, assignProject);
router.get("/", fetchuser, getAssignments);
router.put("/:id", fetchuser, updateAssignment);

module.exports = router;
