import React from "react";
import "./form2.css";

import Divider from "@mui/material/Divider";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Form2 = () => (
  <div className="form1">
    <h1 className="form1_top">
      በቤተ ክርስቲያን/ቤተ እምነት በህብረት በሚኒስትሪው <br />
      &emsp; &ensp; በቦርድ ወይም በስራ አስፈጻሚ ኮሚቴዎች <br />
      &emsp; &emsp;&ensp;&emsp; &ensp;አመራር አባላት የሚሞላ
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
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <h4>የግል መረጃ</h4>
            <div className="adressRegion">
              <div>
                <div> ስም &nbsp; </div>
                <Field className="formikField" type="text" name="regionAdmin" />
              </div>
              <div>
                <div>አባት ስም &nbsp; </div>
                <Field className="formikField" type="text" name="wereda" />
              </div>
              <div>
                <div>የአያት ስም &nbsp; </div>
                <Field className="formikField" type="text" name="houseNum" />
              </div>
              <div>
                <div>የቤተ ክርስቲያን/ የህብረት/የሚኒስትሪው ስም &nbsp; </div>
                <Field className="formikField" type="text" name="zone" />
              </div>
              <div>
                <div>ዜግነት &nbsp; </div>
                <Field className="formikField" type="text" name="kebele" />
              </div>
              <div className="regions">
                <h4>ፆታ</h4>
                <div>
                  <Field type="checkbox" name="region" value="አዲስ አበባ" /> &nbsp;
                  ወንድ
                </div>
                <div>
                  <Field type="checkbox" name="region" value="ትግራይ" /> &nbsp;ሴት
                </div>
              </div>
              <div>
                <div>የትውልድ ጊዜ &nbsp; </div>
                <Field className="formikField" type="text" name="wereda" />
              </div>
              <div className="regions">
                <h4>የጋብቻ ሁኔታ</h4>

                <div>
                  <Field type="checkbox" name="region" value="ትግራይ" />{" "}
                  &nbsp;ያገባ/ች
                </div>
                <div>
                  <Field type="checkbox" name="region" value="አዲስ አበባ" /> &nbsp;
                  ያላገባ/ች
                </div>
              </div>
            </div>
          </div>
          <Divider sx={{ margin: "3%" }} />
          <div>
            የትምህርት ደረጃ <br />
            <div className="typeOfChurch">
              <div>
                <Field type="radio" name="type" value="ቤተ ክርስቲያን" />{" "}
                &nbsp;ከመጀመሪያ ዲግሪ በታች
              </div>
              <div>
                <Field type="radio" name="type" value="ኅብረት" /> &nbsp; ማስተርስ ዲግሪ
              </div>
              <div>
                <Field type="radio" name="type" value="ሚኒስትሪ" /> &nbsp; መጀመሪያ
                ዲግሪ
              </div>
              <div>
                <Field type="radio" name="type" value="ሌላ" /> &nbsp; ከማስተርስ ዲግሪ
                በላይ
              </div>
            </div>
            <div>
              <div> ያለዎት የስራ ኃላፊነት &nbsp; </div>
              <Field className="formikField" type="text" name="regionAdmin" />
            </div>
          </div>

          <Divider sx={{ margin: "3%" }} />
          <div>
            <h4>ቋሚ የመኖሪያ አድራሻ</h4>
            <div className="adressRegion">
              <div>
                <div> ክልል/ከተማ አስተዳደር &nbsp; </div>
                <Field className="formikField" type="text" name="regionAdmin" />
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
            <h4>የግል የስራ አድራሻ/ካለ/</h4>
            <div className="adressRegion">
              <div>
                <div>የመስሪያ ቤቱ ስም &nbsp; </div>
                <Field className="formikField" type="text" name="regionAdmin" />
              </div>
              <div>
                <div> ክልል/ከተማ አስተዳደር &nbsp; </div>
                <Field className="formikField" type="text" name="regionAdmin" />
              </div>
              <div>
                <div>ወረዳ &nbsp; </div>
                <Field className="formikField" type="text" name="wereda" />
              </div>
              <div>
                <div>ስልክ ቁጥር &nbsp; </div>
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
          <h4>ማረጋገጫ</h4>
          <div>
            <Field type="checkbox" name="region" value="አዲስ አበባ" /> &nbsp; እኔ
            ከዚህ በላይ ስሜ እና አድራሻዬ የተገለፀው የሰጥሁት መረጃ በሙሉ ትክክለኛና እውነተኛ መሆኑን አረጋግጣለሁ።
          </div>
          <div className="buttonContainer">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Form2;
