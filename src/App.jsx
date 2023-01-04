import { useState } from "react";
import "./App.css";
import SideNavigation from "./components/sidebar";
import TopNav from "./components/topNav";
import FormPage1 from "./pages/FormPage/FormPage1.jsx";
import FormPage2 from "./pages/FormPage/FormPage2.jsx";
import Form2 from "./components/form2";
import Form1 from "./components/form1";
import Home from "./pages/Home";


import Admin from "./pages/Admin";
import Calendar from "./components/calendar"
import Message from "./components/message"
import Tasks from "./components/tasks"
import Users from "./components/users"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/contact";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
       
          <Routes>
            <Route exact index path="/" element={<Home />} />
            <Route exact index path="/form1" element={<FormPage1 />} />
            <Route exact path="/form2" element={<FormPage2 />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />


            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/message" element={<Message />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/tasks" element={<Tasks />} />
           
          </Routes>
      
      </Router>
    </div>
  );
}

export default App;
