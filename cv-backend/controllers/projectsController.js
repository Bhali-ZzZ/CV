import Projects from '../models/Projects.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addProject = async (req, res) => {
  try {
    const newProject = new Projects(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Projects.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Projects.findByIdAndDelete(id);
    res.json({ message: 'Project entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
