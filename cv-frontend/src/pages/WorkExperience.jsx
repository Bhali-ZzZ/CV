import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import './WorkExperience.css';

const WorkExperience = () => {
  const { backendURL } = useAuth();
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [workExperience, setWorkExperience] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  useEffect(() => {
    const fetchWorkExperience = async () => {
      try {
        const response = await axios.get(`${backendURL}/work-experience`);
        setWorkExperienceList(response.data);
      } catch (error) {
        console.error('Error fetching work experience data:', error);
      }
    };
    fetchWorkExperience();
  }, [backendURL]);

  const handleChange = (e) => {
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendURL}/work-experience`, workExperience);
      alert('Work experience added successfully!');
      // Refresh the list
      const response = await axios.get(`${backendURL}/work-experience`);
      setWorkExperienceList(response.data);
    } catch (error) {
      console.error('Error adding work experience:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendURL}/work-experience/${id}`);
      alert('Work experience deleted successfully!');
      // Refresh the list
      const response = await axios.get(`${backendURL}/work-experience`);
      setWorkExperienceList(response.data);
    } catch (error) {
      console.error('Error deleting work experience:', error);
    }
  };

  return (
    <div className="work-experience-container">
     <ul className="work-experience-list">
        {workExperienceList.map((item) => (
          <li key={item._id} className="work-experience-item">
            <h3>{item.jobTitle}</h3>
            <p>{item.company}</p>
            <p>{item.startDate} - {item.endDate}</p>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
      <h1 className="work-experience-title">Work Experience</h1>
      <form onSubmit={handleSubmit} className="work-experience-form">
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={workExperience.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={workExperience.company}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={workExperience.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={workExperience.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={workExperience.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Work Experience</button>
      </form>
     
    </div>
  );
};

export default WorkExperience;
