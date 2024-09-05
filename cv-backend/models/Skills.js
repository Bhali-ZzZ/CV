import mongoose from 'mongoose';

const skillsSchema = new mongoose.Schema({
  skill: { type: String, required: true },
  proficiency: { type: String, required: true }, // e.g., Beginner, Intermediate, Advanced
});

const Skills = mongoose.model('Skills', skillsSchema);

export default Skills;
