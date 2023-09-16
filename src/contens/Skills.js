// Skills.js
import React from 'react';
import '../Styles/Skills.css'; // Import the CSS file for styling (optional)

const Skills = () => {
  const skillsData = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 65 },
    { name: 'Photoshop', level: 90 },
    { name: 'Figma', level: 75 },
  ];

  return (
    <div className="skills-section" id='skills'>
      <h2 className="section-title">Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
