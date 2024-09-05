import mongoose from 'mongoose';

const workExperienceSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String },
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

export default WorkExperience;
