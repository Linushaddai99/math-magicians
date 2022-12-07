import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';
import CalculatorPage from './components/Pages/CalculatorPage';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>

);

export default App;
