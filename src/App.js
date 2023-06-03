import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
