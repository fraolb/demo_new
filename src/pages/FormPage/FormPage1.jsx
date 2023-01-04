import React, { useContext } from "react";
import SideNavigation from "../../components/sidebar";
import Form1 from "../../components/form1";
import FormHeader from "../../components/formHeader";
import Layout from "../../components/Layout";
import "./FormPage.css";

const RegistrarContext = React.createContext();

const FormPage1 = () => {
  const val= true;
  
  return (
    // <RegistrarContext.Provider value={true}>
      <Layout val="true">
        <div className="formPage">
          <FormHeader
            num={1}
            data="የኃይማኖት ተቋማት ድርጅቶችና ማህበራት ምዝገባ አስተዳደር መምሪያ"
          />
          <div className="formBody">
            {/* <SideNavigation /> */}
            <Form1 />
          </div>
        </div>
      </Layout>
    // </RegistrarContext.Provider>
  );
};

export default FormPage1;
