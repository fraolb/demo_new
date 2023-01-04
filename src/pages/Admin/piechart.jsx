import React from "react";
import ActivityRings, {

} from "react-activity-rings";


//mui
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Piechart = () => {
    const activityData = [
       
        {
          label: "ACTIVITY",
          value: 0.6,
          color: "#43A521CC",
          backgroundColor: "#cccccc"
        },
        {
          label: "ACTIVITies",
          value: 0.9,
          color: "#E8B227CC",
          backgroundColor: "#cccccc"
        },
        {
          label: "RINGS",
          value: 0.2,
          color: "#EC3742CC",
          backgroundColor: "#cccccc"
        }
      ];

  const activityConfig = {
    width: 450,
    height: 450,
  };

  return (
    <Card >
    <CardHeader
      action={
        <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
          Last 7 days
        </Button>
      }
      title="Tasks"
    />
    <Divider />
    <CardContent>
      <Box
        sx={{
          height: 400,
          width:700,
          position: "relative",
        }}
      >
      <ActivityRings data={activityData} config={activityConfig} />
      </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

export default Piechart;
