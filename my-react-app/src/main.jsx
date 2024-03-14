import React from 'react'
import ReactDOM from 'react-dom'
import '../src/main.css'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import About from '../src/components/About/About.jsx'
import Banner from '../src/components/Banner/Banner.jsx'
import Skill from '../src/components/Skills/Skill.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Skill></Skill>
    <Footer></Footer>
  </React.StrictMode>,
)
