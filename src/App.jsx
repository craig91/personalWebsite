// import { useState } from 'react'
import { Navbar } from './Components/navbar'
import { ProfileCard } from './Components/ProfileCard/profileCard'
import { About } from './Components/About/About';
import { Certifications } from './Components/Certifications/Certifications';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ProfileCard />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </>
  )
}

export default App
