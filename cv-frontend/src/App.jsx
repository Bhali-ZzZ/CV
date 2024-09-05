import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import PersonalInfo from './pages/PersonalInfo.jsx';
import Education from './pages/Education.jsx';
import WorkExperience from './pages/WorkExperience.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/Home.jsx';
import Footer from './pages/Footer.jsx';


const App = () => (
  <Router>
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </AuthProvider>
  </Router>
);

export default App;
