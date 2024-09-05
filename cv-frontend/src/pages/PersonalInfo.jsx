import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import './PersonalInfo.css';

const PersonalInfo = () => {
  const { backendURL } = useAuth();
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    contact: '',
    bio: ''
  });
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission loading

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await axios.get(`${backendURL}/personal-info`);
        setPersonalInfo(response.data);
      } catch (error) {
        console.error('Error fetching personal info:', error);
      } finally {
        setIsLoading(false); // End loading
      }
    };
    fetchPersonalInfo();
  }, [backendURL]);

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading before submitting
    try {
      await axios.put(`${backendURL}/personal-info`, personalInfo);
      alert('Personal Info updated successfully!');
    } catch (error) {
      console.error('Error updating personal info:', error);
    } finally {
      setIsSubmitting(false); // End loading after submitting
    }
  };

  return (
    <div className="personal-info-container">
      <h1 className="personal-info-title">Personal Info</h1>

      {isLoading ? (
        <div className="loading">Loading personal information...</div>
      ) : (
        <form onSubmit={handleSubmit} className="personal-info-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={personalInfo.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={personalInfo.contact}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={personalInfo.bio}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Updating...' : 'Update'}
          </button>
        </form>
      )}
    </div>
  );
};

export default PersonalInfo;
