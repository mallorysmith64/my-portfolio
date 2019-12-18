import React, { Component } from 'react'
import Nav from './components/Nav.jsx'
import Overlay from './components/Overlay.jsx'
import MyWork from './components/MyWork.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'
import SocialMedia from './components/SocialMedia.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Overlay/>
        <MyWork />
        <Skills/>
        <About />
        <Form/>
        <Footer />
        <SocialMedia/>
      </>
    )
  }
}

export default App
