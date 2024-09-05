import PersonalInfo from '../models/PersonalInfo.js';

export const getPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne();
    res.json(personalInfo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updatePersonalInfo = async (req, res) => {
  try {
    const { name, contact, bio } = req.body;
    const updatedInfo = await PersonalInfo.findOneAndUpdate({}, { name, contact, bio }, { new: true });
    res.json(updatedInfo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
