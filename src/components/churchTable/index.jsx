import React from 'react'

//mui
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Button,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

const ChurchTable = () => {

    const data = [
        {
          id: 1,
          name: "Wengel le alem",
          adress: "AA",
          status: "Paid",
          action: "pending",
        },
        {
          id: 2,
          name: "Gospel live",
          adress: "Hawassa",
          status: "Not Paid",
          action: "pending",
        },
        {
          id: 3,
          name: "Telico le alem",
          adress: "Asosa",
          status: "Paid",
          action: "pending",
        },
        {
          id: 4,
          name: "Ye midir chew",
          adress: "AA",
          status: "Paid",
          action: "pending",
        },
        {
          id: 5,
          name: "Yehiwot menged",
          adress: "AA",
          status: "Not Paid",
          action: "pending",
        },
      ];

  return (
    <div className="churchs">
    <Box
      className="churchsHeader"
      sx={{
        margin: "10",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: 3,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Churches
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button color="primary" variant="contained">
          Add Church
        </Button>
      </Box>
    </Box>
    <Card>
      <Box sx={{ minWidth: 1050 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Adress</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val) => (
              <TableRow
                hover
                key={val.id}
                // sx={{ borderRadius: 85, margin: 10, borderStyle: "dashed",borderSpacing:10 }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography color="textPrimary" variant="body1">
                      {val.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.adress}</TableCell>

                <TableCell>
                  {val.status == "Paid" ? (
                    <RadioButtonCheckedIcon
                      style={{ fill: "green", fontSize: "small" }}
                    />
                  ) : (
                    <RadioButtonCheckedIcon
                      style={{ fill: "red", fontSize: "small" }}
                    />
                  )}{" "}
                  {val.status}
                </TableCell>
                <TableCell className="dropdown">
                  <button className="dropbtn">
                    <KeyboardArrowDownIcon />
                  </button>
                  <div className="dropdown-content">
                    <div>Paid</div>
                    <div>Not Paid</div>
                    <div>Remove</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  </div> 
  )
}

export default ChurchTable