import mongoose from 'mongoose';

const personalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  bio: { type: String, required: true },
});

const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);

export default PersonalInfo;
