import React from "react";
import Footer from "../footer";
import TopNav from "../topNav";
import { useLocation } from "react-router-dom";
import './layout.css'

const Layout = ({ children }) => {
 
  const { pathname } = useLocation();
  const val=pathname.includes("form")? true:false;

  return (
    <div className="layout">
      <TopNav val={val}/>
      {children}
      <Footer />
    </div>
  );s
};

export default Layout;
