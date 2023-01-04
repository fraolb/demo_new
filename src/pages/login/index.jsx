import React from "react";
import Logo from "../../assets/church_logo.png";
import { Divider } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigateTo = useNavigate();
  return (
    <div className="login">
      <div className="imgContainer">
        <Link to="/">
          <img src={Logo} width="400" height="150" />
        </Link>
      </div>
      <Divider
        orientation="vertical"
        sx={{ backgroundColor: "#76777B", borderRightWidth: 2 }}
      />
      <div className="loginForm">
        <div className="loginHeader">
          <div className="loginHeader1"></div>
          <div>Login</div>
        </div>
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              if (values.name == "admin") {
                navigateTo("/admin");
              } else if (values.name == "registral") {
                navigateTo("/form1");
              } else navigateTo("/");
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="formBigBox">
              <div className="loginFormS">
                {" "}
                <Field type="text" className="formBox" name="name" />
                <AccountCircleOutlinedIcon className="muiIcon" size="large" />
              </div>

              <br />
              <div className="loginFormS">
                {" "}
                <Field type="password" className="formBox" name="password" />
                <HttpsOutlinedIcon className="muiIcon" size="large" />
              </div>

              <br />

              <div className="buttonContainer">
                <button className="btn" type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </div>
              <div className="belowContainer">
                <p>Forget your password?</p>
                <p>Get help signing in</p>
              </div>
            </Form>
          )}
        </Formik>
        <div className="loginFormBottom">Terms of use, Privacy policy</div>
      </div>
    </div>
  );
};

export default Login;
