import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Banner from './components/Banner/Banner.jsx'
import Skill from './components/Skills/Skill.jsx'
import Contact from './components/Contact/Contact.jsx'
import ProjectCard from './components/ProjectCard/ProjectCard.jsx'
import Button from './components/Button/Button.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Skill></Skill>
    <ProjectCard></ProjectCard>
    <Contact></Contact>
    <Button></Button>
    <Footer></Footer>
  </React.StrictMode>,
)
