import React, { useEffect } from 'react';

import './Home.css'; // Import your CSS file for styling
import Typed from 'typed.js';
import about from '../assets/about.jpeg'



const Home = () => {

    useEffect(() => {
        const typed = new Typed('.auto-type', {
          strings: ['Welcome to my website!', 'I am a Web Developer.', 'Let\'s build something amazing.'],
          typeSpeed: 150,
          backSpeed: 150,
          loop: true
        });

        return () => {
            typed.destroy();
          };
        }, []);

  return (
    <div>
        <div className="home-container">
        <h1 className='before'><span className='auto-type'></span></h1>
        <p>I am a frontend developer with over 5 years of experience in creating dynamic and responsive web applications.</p>
    </div>
    <div className='container home-about'>
    <div className='row'>
    <div className='col-md-6 about-img'>
    <img src={about} alt=''/>
    </div>
    <div className='col-md-6 second'>
        <p>Hello! I'm Madega Tsikani, a passionate web developer based in South Africa. Currently, I'm in my first year of university, pursuing a degree in Computer Science. Alongside my studies, I work as a web developer, specializing in React and frontend technologies.

With a strong foundation in the MERN stack, I bring creativity and technical expertise to every project. My portfolio reflects a commitment to delivering high-quality, user-friendly web solutions that meet client needs and exceed expectations. Whether it's developing dynamic websites or full-stack applications, I'm always eager to take on new challenges and grow as a developer.</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
