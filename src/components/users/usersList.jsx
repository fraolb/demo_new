import React from 'react'
import './users.css'
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


const UsersList = () => {
    const data = [
        {
          id: 1,
          name: "abebe",
          adress: "AA",
          status: "Admin",
          action: "pending",
        },
        {
          id: 2,
          name: "abebe",
          adress: "AA",
          status: "Registral",
          action: "pending",
        },
        {
          id: 3,
          name: "abebe",
          adress: "AA",
          status: "Admin",
          action: "pending",
        },
        {
          id: 4,
          name: "abebe",
          adress: "AA",
          status: "Registral",
          action: "pending",
        },
        {
          id: 5,
          name: "abebe",
          adress: "AA",
          status: "Super Admin",
          action: "pending",
        },
      ];

  return (
    
       <div className="users">
        <Box
          className="usersHeader"
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
            Users
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button color="primary" variant="contained">
              Add Users
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
                      {val.status == "Admin" ? (
                        <RadioButtonCheckedIcon
                          style={{ fill: "green", fontSize: "small" }}
                        />
                      ) : val.status == "Super Admin" ? (
                        <RadioButtonCheckedIcon
                          style={{ fill: "blue", fontSize: "small" }}
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
                        <div>Make Admin</div>
                        <div>Block</div>
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

export default UsersList