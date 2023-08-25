import React from 'react';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Home from './pages/Vote/Home';
import Final_vote from './pages/Vote/Final_vote';
import Winners from './pages/Vote/Winner/Winners';
import Candidates_details from './pages/Vote/Candidates/Candidates_details'
import Candidates_info from './pages/Vote/Candidates/Candidates_info'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/vote" element={<Final_vote />} />
        <Route path="/home/winner" element={<Winners />} />
        <Route path="/home/candidates" element={<Candidates_details />} />
        <Route path="/home/candidates/:name" element={<Candidates_info />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
