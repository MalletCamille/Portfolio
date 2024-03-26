import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Banner from './components/Banner/Banner.jsx'
import Skill from './components/Skills/Skill.jsx'
import Form from './components/Form/Form.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Skill></Skill>
    <Form></Form>
    <Footer></Footer>
  </React.StrictMode>,
)
