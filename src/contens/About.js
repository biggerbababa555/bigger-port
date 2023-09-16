import React from 'react';
import '../Styles/About.css'; 
import aboutImage from '../img/image1.png'; 
import { Link } from 'react-scroll';



const About = () => {
  const aboutData = {
    title: "Aboue Me",
    description: "My name is Kritsada Prasertsin.My nickname is Big am from Nakhon Nayok Province.Currently studying at Srinakharinwirot University. Faculty of Computer Engineering. I like making websites especially website design website development and have expertise in using various programs on computers including hardware such as computer assembly and computer repair",
    
  };

  return (
    
    <div className="about-container" id='about'>
      <div className="about-details">
        <h2 className="about-title">{aboutData.title}</h2>
        <p className="about-description">{aboutData.description}</p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      
    </div>
    
  );
};

export default About;
