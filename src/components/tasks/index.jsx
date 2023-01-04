
import React from "react";
import Layout from "../adminLayout";
import "./tasks.css";
import TourIcon from "@mui/icons-material/Tour";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Avatar,
  Button,
  Box,
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import ChurchTable from "../churchTable";

const Tasks = () => {
  return (
    <Layout>
      <div className="tasks">
        <div className="tasksTop">
          <Card sx={{ minWidth: 275, minHeight: 150, m: 2,p:3, background:"#f6fcff", borderRadius:3 }}>
            <CardContent sx={{ display: "flex" }}>
              <TourIcon style={{ color: "red" }}/>
              <div>
                <Typography variant="h5" component="div">
                  34
                </Typography>
                Total active
              </div>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, minHeight: 150, m: 2,p:3, background:"#f6fcff", borderRadius:3  }}>
            <CardContent sx={{ display: "flex" }}>
              <TimelapseIcon style={{ color: "yellow" }}/>
              <div>
                <Typography variant="h5" component="div">
                  14
                </Typography>
                Total Pending
              </div>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, minHeight: 150, m: 2,p:3, background:"#f6fcff", borderRadius:3  }}>
            <CardContent sx={{ display: "flex" }}>
              <CheckCircleIcon style={{ color: "green" }}/>
              <div>
                <Typography variant="h5" component="div">
                  20
                </Typography>
                Complete
              </div>
            </CardContent>
          </Card>
          
        </div>
        <ChurchTable />
      </div>
    </Layout>
  );
};

export default Tasks;
