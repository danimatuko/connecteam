import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import LogosSlider from './components/LogosSlider'

function App() {
  return (
    <>
      <Hero />
      <LogosSlider />
    </>
  );
}

export default App
