import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
});

const Projects = mongoose.model('Projects', projectsSchema);

export default Projects;
