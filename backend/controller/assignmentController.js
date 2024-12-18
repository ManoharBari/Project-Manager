const Assignment = require("../models/assignment");
const User = require("../models/user");
const Project = require("../models/project");

const assignments = {
  assignProject: async (req, res) => {
    const { projectId, candidateId } = req.body;
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const candidate = await User.findById(candidateId);
      if (!candidate || candidate.role !== "candidate") {
        return res
          .status(404)
          .json({ message: "Candidate not found or invalid role" });
      }

      const assignment = new Assignment({
        project: projectId,
        candidate: candidateId,
      });

      await assignment.save();
      res
        .status(201)
        .json({ message: "Project assigned successfully", assignment });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getAssignments: async (req, res) => {
    try {
      const assignments = await Assignment.find()
        .populate("project", "title description")
        .populate("candidate", "name email");
      res.status(200).json(assignments);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  updateAssignment: async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    try {
      const assignment = await Assignment.findById(id);
      if (!assignment) {
        return res.status(404).json({ message: "Assignment not found" });
      }

      assignment.status = status;
      await assignment.save();

      res
        .status(200)
        .json({ message: "Assignment updated successfully", assignment });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = assignments;
