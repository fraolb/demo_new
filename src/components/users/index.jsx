import React from "react";
import Layout from "../adminLayout";
import "./users.css";
import UsersList from "./usersList";

const Users = () => {
  
  return (
    <Layout>
      <UsersList />
    </Layout>
  );
};

export default Users;