import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import About from '../src/components/About/About.jsx'
import Banner from '../src/components/Banner/Banner.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
    <About></About>
    <Footer></Footer>
  </React.StrictMode>,
)
