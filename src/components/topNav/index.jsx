import React, { useState, useContext } from "react";
import Logo from "../../assets/church_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import User from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

import "./topNav.css";

const TopNav = ({val}) => {
  const [isRegistrar, setIsRegisrar] = useState(false);
 
  // const data = useContext(RegistrarContext);
  console.log("data is", val )

  return (
    <div className="nav">
      <div className="logo">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={Logo} height={80} />
        </Link>
      </div>
      <div className="menu">
        {val ? (
          <div className="headerRegistrar">
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                <img className="profileImg" src={User} height="50" />
              </button>
              <div className="dropdown-content">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI"> Setting</a>
                </Link>
                <Divider />
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a className="dropDownI"> Log Out</a>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="headerNav">
            <Link
              to="/"
              className="linkTop"
              style={{
                textDecoration: "none",
                color: "#36495a",
                ":hover": {
                  color: "#0078d2",
                },
              }}
            >
              <a className="topM">Home</a>
            </Link>
            <Link
              className="linkTop"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              <a className="topM">Contact us</a>
            </Link>
            {/* <Link
              className="linkTop"
              to="/form1"
              style={{ textDecoration: "none" }}
            >
              <a className="topM">Registration</a>
            </Link> */}
            <div className="dropdown">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI"> ስለ ካውንስሉ</a>
                </Link>
                <Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI">የእምነት አምዶች</a>
                </Link>
                <Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI">ኢቫንጀሊካል ሚዲያ</a>
                </Link>
                <Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI"> ኮሚሽንና ነገረ መለኮት</a>
                </Link>
                <Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI"> የመጽሐፍ ቅዱስ ት/ቤቶች</a>
                </Link>
                <Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI">የሴቶች፤የወጣቶችና የልጆች አገልግሎት</a>
                </Link>
                <Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="dropDownI">አባልነት እና መስፈርቶች</a>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a className="dropDownI">Login</a>
                </Link>
              </div>
            </div>

            <div className="sideTest"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;

{
  /* <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a> */
}

{
  /* <Link
            className="linkTop"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <a className="topM">About Us</a>
          </Link> */
}
