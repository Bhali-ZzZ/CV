import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import './Projects.css';

const Projects = () => {
  const { backendURL } = useAuth();
  const [projectsList, setProjectsList] = useState([]);
  const [project, setProject] = useState({
    title: '',
    description: '',
    link: ''
  });
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission loading

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true); // Start loading before fetching
        const response = await axios.get(`${backendURL}/projects`);
        setProjectsList(response.data);
      } catch (error) {
        console.error('Error fetching projects data:', error);
      } finally {
        setIsLoading(false); // End loading after fetching
      }
    };
    fetchProjects();
  }, [backendURL]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading before submitting
    try {
      await axios.post(`${backendURL}/projects`, project);
      alert('Project added successfully!');
      setProject({ title: '', description: '', link: '' }); // Clear the form
      // Refresh the list
      const response = await axios.get(`${backendURL}/projects`);
      setProjectsList(response.data);
    } catch (error) {
      console.error('Error adding project:', error);
    } finally {
      setIsSubmitting(false); // End loading after submitting
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendURL}/projects/${id}`);
      alert('Project deleted successfully!');
      // Refresh the list
      const response = await axios.get(`${backendURL}/projects`);
      setProjectsList(response.data);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      {isLoading ? (
        <div className="loading">Loading projects...</div>
      ) : (
        <ul className="projects-list">
          {projectsList.map((item) => (
            <li key={item._id} className="projects-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">View Project</a>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <hr />

      <div>
        <h2>Add a New Project</h2>
        {isSubmitting ? (
          <div className="loading">Submitting project...</div>
        ) : (
          <form onSubmit={handleSubmit} className="projects-form">
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={project.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Link:
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Add Project</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Projects;
