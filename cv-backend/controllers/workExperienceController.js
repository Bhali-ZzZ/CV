import WorkExperience from '../models/WorkExperience.js';

export const getWorkExperience = async (req, res) => {
  try {
    const workExperience = await WorkExperience.find();
    res.json(workExperience);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addWorkExperience = async (req, res) => {
  try {
    const newWorkExperience = new WorkExperience(req.body);
    await newWorkExperience.save();
    res.status(201).json(newWorkExperience);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWorkExperience = await WorkExperience.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedWorkExperience);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    await WorkExperience.findByIdAndDelete(id);
    res.json({ message: 'Work experience entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
