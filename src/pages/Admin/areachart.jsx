import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Areachart = (props) => {
  const theme = useTheme();

  const state = {
    labels: ["January", "February", "March", "April", "May","JUne","July","Augest"],
    datasets: [
      {
        label: "Registered",
        fill: true,
        lineTension: 0.5,
        backgroundColor: '#dde1e6',
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [55, 59, 67, 67, 73,72,85,92],
      },
    ],
  };

  return (
    <Card {...props}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
            Last 7 days
          </Button>
        }
        title="Registered"
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
          <Line
            data={state}
            options={{
              animation: false,
              cornerRadius: 20,
              layout: { padding: 0 },
              legend: { display: false },
              maintainAspectRatio: false,
              responsive: true,
              xAxes: [
                {
                  ticks: {
                    fontColor: theme.palette.text.secondary
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: theme.palette.text.secondary,
                    beginAtZero: true,
                    min: 0
                  },
                  gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: theme.palette.divider,
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: theme.palette.divider
                  }
                }
              ],
              tooltips: {
                backgroundColor: theme.palette.background.paper,
                bodyFontColor: theme.palette.text.secondary,
                borderColor: theme.palette.divider,
                borderWidth: 1,
                enabled: true,
                footerFontColor: theme.palette.text.secondary,
                intersect: false,
                mode: 'index',
                titleFontColor: theme.palette.text.primary
              }
            }}
          />
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

export default Areachart;
