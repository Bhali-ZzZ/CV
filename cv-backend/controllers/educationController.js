import Education from '../models/Education.js';

export const getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEducation = await Education.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedEducation);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    await Education.findByIdAndDelete(id);
    res.json({ message: 'Education entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
