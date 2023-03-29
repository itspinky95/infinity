import React from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import About from './components/About'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact'
import Spotify from './components/Spotify'


function App() {

  return (
    <div>
      <Spotify/>
      <Sidenav/>
      <Main/>
      <About/>
      <Work/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
