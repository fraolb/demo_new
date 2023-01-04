import React from "react";
import "./formHeader.css";

const FormHeader = (props) => {
  return (
    <div className="formHeader">
      <h6>Form No {props.num}</h6>
      <h6>{props.data}</h6>
      <h6 style={{ color: "#e6b301" }}>1</h6>
    </div>
  );
};

export default FormHeader;
