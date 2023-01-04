import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div>
    <h1>
      በቤተ ክርስቲያን/ቤተ እምነት በህብረት በሚኒስትሪው <br />
      &emsp; &ensp; በአመልካቹ ሃይማኖት ተቋም የሚሞላ
    </h1>
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
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            እኔ &nbsp; <Field type="text" name="name" />
            &nbsp; የ &nbsp;
            <Field type="text" name="church" />
            &nbsp; ቤተ ክርስቲያን ፤ ኅብረት ፤ ሚኒስትሪ ከዚህ በታች የሚሰጥው መረጃ በሙሉ ትክክለኛ መሆኑን
            አረጋግጣለሁ።
          </div>
          <div>
            የእምነት ተቋሙ መረጃ <br />
            የአመልካች ተቋሙ ስም &nbsp; <Field type="text" name="orgName" />
          </div>
          <div>
            የእምነት ተቋሙ አይነት <br />
            <Field type="radio" name="type" value="ቤተ ክርስቲያን" /> &nbsp; ቤተ
            ክርስቲያን
            <Field type="radio" name="type" value="ኅብረት" /> &nbsp; ኅብረት
            <Field type="radio" name="type" value="ሚኒስትሪ" /> &nbsp; ሚኒስትሪ
            <Field type="radio" name="type" value="ሌላ" /> &nbsp; ሌላ
          </div>
          <div>
            ቤተ ክርስቲያኑ ፤ ኅብረቱ ፤ ሚንስትሪው አገልግሎት እየሰጠ ያለብት ክልል ወይም የክተማ አስተዳደር
            <Field type="checkbox" name="region" value="አዲስ አበባ" /> &nbsp; አዲስ
            አበባ
            <Field type="checkbox" name="region" value="ትግራይ" /> &nbsp;ትግራይ
            <Field type="checkbox" name="region" value="ሶማሌ" /> &nbsp; ሶማሌ
            <Field type="checkbox" name="region" value="ጋምቤላ ህዝቦች" /> &nbsp;
            ጋምቤላ ህዝቦች
            <Field type="checkbox" name="region" value="አፋር" /> &nbsp; አፋር
            <Field type="checkbox" name="region" value="ኦሮሚያ" /> &nbsp; ኦሮሚያ
            <Field type="checkbox" name="region" value="አማራ" /> &nbsp; አማራ
            <Field type="checkbox" name="region" value="ድሬደዋ" /> &nbsp; ድሬደዋ
            <Field type="checkbox" name="region" value="ሐረሪ ሕዝብ" /> &nbsp; ሐረሪ
            ሕዝብ
            <Field type="checkbox" name="region" value="ቤንሻንጉል/ጉምዝ" /> &nbsp;
            ቤንሻንጉል/ጉምዝ
            <Field type="checkbox" name="region" value="ሲዳማ" /> &nbsp; ሲዳማ
            <Field type="checkbox" name="region" value="ደ/ም/ክ" /> &nbsp; ደ/ም/ክ
            <Field type="checkbox" name="region" value="ሌላ" /> &nbsp; ሌላ
          </div>
          <div>
            <h4>ስልክ ቁጥር</h4>
            ክልል/ከተማ አስተዳደር &nbsp; <Field type="text" name="regionAdmin" />
            ወረዳ &nbsp; <Field type="text" name="wereda" />
            የቤት ቁጥር &nbsp; <Field type="text" name="houseNum" />
            ዞን//ክ/ከተማ &nbsp; <Field type="text" name="zone" />
            ቀበሌ &nbsp; <Field type="text" name="kebele" />
          </div>
          <div>
            <h4>ስልክ ቁጥር</h4>
            ስልክ &nbsp; <Field type="text" name="phoneNUm" />
            ፋክስ ቁጥር &nbsp; <Field type="text" name="faxNum" />
            ፖ.ሣ.ቁጥር &nbsp; <Field type="text" name="postNum" />
            ኢ-ሜይል &nbsp; <Field type="text" name="email" />
          </div>
          <div>
            <h4>ቤተ ክርስቲያኑ ፤ ኅብረቱ ፤ ሚንስትሪ የተቋቋመበት ዓላማ (ግልፅና አጠር ተደርጎ ይፃፍ)</h4>
            <Field type="text" rows="7" name="reason" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
