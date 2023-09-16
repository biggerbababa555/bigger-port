
import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'; //คลิ๊กไปลิงค์ต่างๆ

import Navbar from './contens/Navbar';
import Home from './contens/Home'
import About from './contens/About';
import Skills from './contens/Skills';
import Lottie from './contens/lottie';
import Lottie404 from './contens/404';
import Resume from './contens/Resume';
import Projects from './contens/Project';
import Foot from './contens/Foot'


function App() {
  return (
    
  <Router>

    <Navbar/>
    
    <Home/>
    
    <About/>
    
    
    <Lottie/>

    <Skills/>

    <Lottie404/>
    <Resume/>
    
    <Projects/>
    <Foot/>
  </Router>
  
  );
}

export default App;
