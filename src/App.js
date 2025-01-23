import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componets/Home';
import About from './componets/About';
import Booking from './componets/Booking';
import Navbar from './componets/Navbar';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Dashboard from './componets/DashBoard';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
