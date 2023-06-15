import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Update from './components/Update/Update';
import Main from './components/Main/Main';
import Calendar from './components/Calendar/Calendar';
import DecCalendar from './components/DecCalendar/DecCalendar';
import FilledCalendar from './components/FilledCalendar/FilledCalendar';
import AddCalendar from './components/AddCalendar/AddCalendar';
import PicCalendar from './components/PicCalendar/PicCalendar';
import NewInventory from './components/NewInventory/NewInventory';
import YzyInventory from './components/YzyInventory/YzyInventory';
import Inventory from './components/Inventory/Inventory';
import FilledInventory from './components/FilledInventory/FilledInventory';
import AddInventory from './components/AddInventory/AddInventory';
import PicInventory from './components/PicInventory/PicInventory';
import SalesInventory from './components/SalesInventory/SalesInventory';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/update" element={<Update />} />
          <Route path="/main" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/deccalendar" element={<DecCalendar />} />     
          <Route path="/filledcalendar" element={<FilledCalendar />} />
          <Route path="/addcalendar" element={<AddCalendar />} />
          <Route path="/piccalendar" element={<PicCalendar />} />
          <Route path="/newinventory" element={<NewInventory />} />
          <Route path="/yzyinventory" element={<YzyInventory />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/Filledinventory" element={<FilledInventory />} />
          <Route path="/addinventory" element={<AddInventory />} />
          <Route path="/picinventory" element={<PicInventory />} />
          <Route path="/salesinventory" element={<SalesInventory />} />
        </Routes>
    </Router>
  );
}

export default App;
