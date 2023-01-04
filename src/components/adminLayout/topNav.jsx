import React from "react";
import Logo from "../../assets/church_logo.png";
import User from "../../assets/user.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import "./topNav.css";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="logoContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} height="90" />
        </Link>
      </div>
      <div className="navSearch">
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              console.log(JSON.stringify(values, null, 2));

              // navigateTo('/form2');

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="headerForm">
              <Field
                className="formikHeader"
                style={{ width: 350, height: 30 }}
                type="text"
                name="name"
              />

              <button
                className="navSearchButton"
                type="submit"
                disabled={isSubmitting}
              >
                <SearchIcon />
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="topNavRight">
        <div className="iconButton">
          <Link to="/message">
            <EmailOutlinedIcon />
          </Link>
        </div>
        <div className="iconButton">
          <NotificationsNoneOutlinedIcon />
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            {" "}
            <img className="profileImgTop" src={User} height="50" />
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
    </div>
  );
};

export default TopNav;
