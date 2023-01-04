import React from "react";
import Layout from "../../components/adminLayout";
import Piechart from "./piechart";
import Areachart from "./areachart";
import ChurchTable from "../../components/churchTable";
import "./Admin.css";

const Admin = () => {
  return (
    <Layout>
      <div className="dashBoard">
        <div className="chartTop">
          <Areachart />
          <Piechart />
        </div>
        <ChurchTable />
      </div>
    </Layout>
  );
};

export default Admin;
