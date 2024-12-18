const Project = require("../models/project");

const projectController = {
  
  createProject: async (req, res) => {
    const { title, description, status } = req.body;
    try {
      const newProject = new Project({ title, description, status });
      await newProject.save();
      res
        .status(201)
        .json({ message: "Project created successfully", project: newProject });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  updateProject: async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      project.title = title || project.title;
      project.description = description || project.description;
      project.status = status || project.status;

      await project.save();
      res
        .status(200)
        .json({ message: "Project updated successfully", project });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  deleteProject: async (req, res) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      await project.remove();
      res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = projectController;
