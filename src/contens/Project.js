import React from 'react';
import ProjectStyle from '../Styles/Project.css';
import P1 from '../img/p1.jpg'
import P2 from '../img/p2.jpg'
import P3 from '../img/p3.jpg'
import P4 from '../img/p4.jpg'
import P5 from '../img/p5.jpg'
import P6 from '../img/p6.jpg'


function Project() {
  return (
    <section id="work" className="work">
      <div className="container" id="project">
        <h1 className="section-heading" >My Project</h1>

        <div className="card-wrapper">
          <div className="card">
            <div className="overlay">
              <span>BiggyMouse</span>
              <a href="#">E Commerce Website</a>
            </div>
            <img className="imgcard" src={P1}></img>
          </div>
          <div className="card">
            <div className="overlay">
              <span>Budget App</span>
              <a href="#">Use Insertion Sort in Project</a>
            </div>
            <img src={P2}></img>
          </div>
          <div className="card">
            <div className="overlay">
              <span>MySOS</span>
              <a href="#">Application SOS in Mobile</a>
            </div>
            <img src={P3}></img>
          </div>
          <div className="card">
            <div className="overlay">
              <span>Design Application</span>
              <a href="#">design with Figma</a>
            </div>
            <img src={P4}></img>
          </div>
          <div className="card">
            <div className="overlay">
              <span>Clone Spotify</span>
              <a href="#">design with Figma</a>
            </div>
            <img src={P6}></img>
          </div>
          <div className="card">
            <div className="overlay">
              <span>Design Website </span>
              <a href="#">html css js</a>
            </div>
            <img src={P5}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
