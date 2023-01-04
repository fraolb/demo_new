import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { Link } from "react-router-dom";
import "./sideNav.css";

const SideNav = () => {
  return (
    <div className="sideNav">
      <Link
        to="/admin"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <div className="sideBtn">
          <GridViewIcon /> <div className="btnText">Dashboard</div>
        </div>
      </Link>
      <Link
        to="/tasks"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <div className="sideBtn">
          <AssignmentOutlinedIcon />
          <div className="btnText"> Tasks</div>
        </div>
      </Link>
      <Link
        to="/users"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <div className="sideBtn">
          <GroupsOutlinedIcon />
          <div className="btnText">Users</div>
        </div>
      </Link>
      <Link
        to="/message"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <div className="sideBtn">
          <EmailOutlinedIcon />
          <div className="btnText"> Messages</div>
        </div>
      </Link>
      <Link
        to="/calendar"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <div className="sideBtn">
          <CalendarMonthOutlinedIcon /> <div className="btnText">Calendar</div>
        </div>
      </Link>
      {/* <button className='sideBtn'>Dashboard</button>
        <button className='sideBtn'>Tasks</button>
        <button className='sideBtn'>Users</button>
        <button className='sideBtn'>Messages</button>
        <button className='sideBtn'>Calendar</button> */}
    </div>
  );
};

export default SideNav;
