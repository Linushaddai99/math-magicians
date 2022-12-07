import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Calculator from './components/Calculator/Calculator';
import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';
import CalculatorPage from './components/Pages/CalculatorPage';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>

);

export default App;
