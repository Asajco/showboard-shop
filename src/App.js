import React from 'react'
import AppNavigation from './AppNavigation'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppNavigation />
      <Footer />
    </div>
  )
}

export default App
