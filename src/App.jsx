import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import LogosSlider from './components/LogosSlider'
import ContentSection from './components/ContentSection'

function App() {
  return (
    <>
      <Hero />
      <LogosSlider />
      <ContentSection />
    </>
  );
}

export default App
