import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Header from "./components/Header"


function App() {
  return (
    <>
    <Header></Header>
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Resume></Resume>
    <Footer></Footer>
    </>
  )
}

export default App
