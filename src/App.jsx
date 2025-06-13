import React from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegHospital } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import RentHouse from './RentHouse';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Extract this into a separate component to use hooks like useNavigate

// Main App router
function App() {
  return (
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RentHouse" element={<RentHouse />} />
      </Routes>
   
  );
}

export default App;
