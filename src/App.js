import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculations from './components/Calculations';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculations" element={<Calculations />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
