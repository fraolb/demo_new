import React from "react";
import "./form1.css";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Form1 = () => {
  const navigateTo = useNavigate();
  return (
    <div className="form1">
      <h1 className="form1_top">
        በቤተ ክርስቲያን/ቤተ እምነት በህብረት በሚኒስትሪው <br />
        &emsp; &ensp; በአመልካቹ ሃይማኖት ተቋም የሚሞላ
      </h1>
      <Divider sx={{ margin: "3%" }} />
      <Formik
        initialValues={{
          name: "",
          church: "",
          orgName: "",
          type: "",
          region: [],
          regionAdmin: "",
          wereda: "",
          zone: "",
          houseNum: "",
          kebele: "",
          phoneNUm: "",
          faxNum: "",
          postNum: "",
          email: "",
          reason: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2));
            // history.push('/form2');
            navigateTo('/form2');
            // <Redirect to=”/form2” />
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              እኔ &nbsp;{" "}
              <Field className="formikField" type="text" name="name" />
              &nbsp; የ &nbsp;
              <Field className="formikField" type="text" name="church" />
              &nbsp; ቤተ ክርስቲያን ፤ ኅብረት ፤ ሚኒስትሪ ከዚህ በታች የሚሰጥው መረጃ በሙሉ ትክክለኛ መሆኑን
              አረጋግጣለሁ።
            </div>
            <Divider sx={{ margin: "3%" }} />
            <div>
              <h4>የእምነት ተቋሙ መረጃ </h4>
              የአመልካች ተቋሙ ስም &nbsp;{" "}
              <Field className="formikField" type="text" name="orgName" />
            </div>
            <div>
              የእምነት ተቋሙ አይነት <br />
              <div className="typeOfChurch">
                <div>
                  <Field type="radio" name="type" value="ቤተ ክርስቲያን" /> &nbsp; ቤተ
                  ክርስቲያን
                </div>
                <div>
                  <Field type="radio" name="type" value="ኅብረት" /> &nbsp; ኅብረት
                </div>
                <div>
                  <Field type="radio" name="type" value="ሚኒስትሪ" /> &nbsp; ሚኒስትሪ
                </div>
                <div>
                  <Field type="radio" name="type" value="ሌላ" /> &nbsp; ሌላ
                </div>
              </div>
            </div>
            <Divider sx={{ margin: "3%" }} />
            <div>
              ቤተ ክርስቲያኑ ፤ ኅብረቱ ፤ ሚንስትሪው አገልግሎት እየሰጠ ያለብት ክልል ወይም የክተማ አስተዳደር
              <div className="regions">
                <div>
                  <Field type="checkbox" name="region" value="አዲስ አበባ" /> &nbsp;
                  አዲስ አበባ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ትግራይ" />{" "}
                  &nbsp;ትግራይ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ሶማሌ" /> &nbsp; ሶማሌ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ጋምቤላ ህዝቦች" />{" "}
                  &nbsp; ጋምቤላ ህዝቦች
                </div>
                <div>
                  <Field type="checkbox" name="region" value="አፋር" /> &nbsp; አፋር
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ኦሮሚያ" /> &nbsp;
                  ኦሮሚያ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="አማራ" /> &nbsp; አማራ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ድሬደዋ" /> &nbsp;
                  ድሬደዋ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ሐረሪ ሕዝብ" /> &nbsp;
                  ሐረሪ ሕዝብ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ቤንሻንጉል/ጉምዝ" />{" "}
                  &nbsp; ቤንሻንጉል/ጉምዝ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ሲዳማ" /> &nbsp; ሲዳማ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ደ/ም/ክ" /> &nbsp;
                  ደ/ም/ክ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ሌላ" /> &nbsp; ሌላ
                </div>
              </div>
            </div>
            <Divider sx={{ margin: "3%" }} />
            <div>
              <h4>ቤተ ክርስቲያኑ ፤ ኅብረቱ ፤ ሚንስትሪው ፤ ዋና መ/ቤት አድራሻ</h4>
              <div className="adressRegion">
                <div>
                  <div> ክልል/ከተማ አስተዳደር &nbsp; </div>
                  <Field
                    className="formikField"
                    type="text"
                    name="regionAdmin"
                  />
                </div>
                <div>
                  <div>ወረዳ &nbsp; </div>
                  <Field className="formikField" type="text" name="wereda" />
                </div>
                <div>
                  <div>የቤት ቁጥር &nbsp; </div>
                  <Field className="formikField" type="text" name="houseNum" />
                </div>
                <div>
                  <div>ዞን//ክ/ከተማ &nbsp; </div>
                  <Field className="formikField" type="text" name="zone" />
                </div>
                <div>
                  <div>ቀበሌ &nbsp; </div>
                  <Field className="formikField" type="text" name="kebele" />
                </div>
              </div>
            </div>
            <Divider sx={{ margin: "3%" }} />
            <h4>ስልክ ቁጥር</h4>
            <div className="adressRegion">
              <div>
                <div>ስልክ &nbsp; </div>
                <Field className="formikField" type="text" name="phoneNUm" />
              </div>
              <div>
                <div>ፋክስ ቁጥር &nbsp; </div>
                <Field className="formikField" type="text" name="faxNum" />
              </div>
              <div>
                <div>ፖ.ሣ.ቁጥር &nbsp; </div>
                <Field className="formikField" type="text" name="postNum" />
              </div>
              <div>
                <div>ኢ-ሜይል &nbsp; </div>
                <Field className="formikField" type="text" name="email" />
              </div>
            </div>
            <Divider sx={{ margin: "3%" }} />
            <div>
              <h4>ቤተ ክርስቲያኑ ፤ ኅብረቱ ፤ ሚንስትሪ የተቋቋመበት ዓላማ (ግልፅና አጠር ተደርጎ ይፃፍ)</h4>
              <div className="reasonBox">
                <textarea
                  className="formikFieldletter"
                  rows="5"
                  type="text"
                  name="reason"
                />
              </div>
            </div>
            <div className="buttonContainer">
              <button type="submit" disabled={isSubmitting}>
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Form1;
