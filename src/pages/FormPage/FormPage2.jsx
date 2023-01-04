import React from "react";
import FormHeader from "../../components/formHeader";
import SideNavigation from "../../components/sidebar";
import Form2 from "../../components/form2";
import Layout from "../../components/Layout";
import "./FormPage.css";

const FormPage2 = () => {
  return (
    <Layout>
      <div className="formPage">
        <FormHeader num={2} data="የኃይማኖት ተቋማት ድርጅቶችና ማህበራት ምዝገባ አስተዳደር መምሪያ" />
        <div className="formBody">
          {/* <SideNavigation /> */}
          <Form2 />
        </div>
      </div>
    </Layout>
  );
};

export default FormPage2;
