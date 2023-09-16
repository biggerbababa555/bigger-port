import React from 'react';
import ResumeStyles from '../Styles/Resume.css'; // Rename the import statement, for example 'ResumeStyles.css'
import ResumePDF from '../img/CV for Internship.pdf';
function Resume() {
  return (
    <section className="freelancer">
      <h1>I want to do an internship.</h1>
      <p>Please take me into consideration of your options. I won't disappoint you.</p>
      <a href={ResumePDF}
  download="resumeforintern"
  target="_blank"
  rel="noopener noreferrer">
      <button className="btn btn-primary" >Download CV</button>
      </a>
    </section>
  );
}

export default Resume;
