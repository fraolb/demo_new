import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Logo from "../../assets/church_logo.png";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactTop">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} height={80} />
        </Link>
      </div>
      <div className="contact">
        <div className="contactRight"></div>
        <div className="contactBody">
          <h4 className="h4contact">
            <div className="contactDesign">
              <Divider color="white"/>
            </div>
            Contact Us
          </h4>
          Feel free to contact us any time. We will get back to you as soon as
          we can!
          <br />
          <br />
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>Name</div>
                <Field type="text" className="contactForm" name="name" />
                <br />
                <br />
                <div>Email</div>
                <Field type="email" className="contactForm" name="email" />
                <br />
                <br />
                <div>Message</div>
                <textarea
                  type="text"
                  rows="5"
                  className="contactFormM"
                  name="message"
                />
                <div className="buttonContainer">
                  <button
                    type="submit"
                    className="btnContact"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="contactFront">
          <div>Info</div>

          <div>
            <MailOutlineIcon /> &emsp; info@etgbcc.org{" "}
          </div>
          <div>
            <LocalPhoneIcon /> &emsp; Phone: +251 116 66 20 44 / +251 116 66 25
            62
          </div>
          <div>
            <PinDropIcon /> &emsp; Addis Ababa, Ethiopia
          </div>
          <div>
            <AvTimerIcon /> &emsp; 09:00-18:00
          </div>
        </div>
        <div className="contactSide"></div>
      </div>
    </div>
  );
};

export default Contact;
