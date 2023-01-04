import React from "react";
import TopNav from "./topNav";
import SideNav from "./sideNav";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <TopNav />
      <div className="layoutMiddle">
        <SideNav /> 
        {children}
      </div>
    </div>
  );
};

export default Layout;
