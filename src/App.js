import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;
