import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home.jsx'
import Hobbies from './components/hobbies.jsx'
import About from './components/about.jsx'
import HobbyInfo from './components/hobbyInfo.jsx'
import './App.css'

const App = () => (

    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbyInfo/:hobbyId" element={<HobbyInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

);

export default App
