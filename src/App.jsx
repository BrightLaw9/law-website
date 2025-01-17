import { useState } from 'react'
import styles from './App.module.css'; 
import { Navbar } from "./components/Navbar/Navbar";
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Intro } from "./components/Intro/Intro";

function App() { 

  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
