import React from "react";
import { Divider } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div>Terms</div>
        <div>About</div>
        <div>Contact</div>
        <div>Request More Information</div>
        <div>Social Media</div>
      </div>
      <Divider sx={{ bgcolor: "white", margin:"20px" }}/>
      <div className="footerTop">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </div>
        <div>
          © 2015 Ethiopian council of Gospel Believers’ Churches .All rights
          reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
