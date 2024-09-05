import Skills from '../models/Skills.js';

export const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addSkill = async (req, res) => {
  try {
    const newSkill = new Skills(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSkill = await Skills.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await Skills.findByIdAndDelete(id);
    res.json({ message: 'Skill entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
