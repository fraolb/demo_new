import React from "react";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

import "./sideBar.css";

const Sidebar1 = () => {
  return (
    <div
      className="MainSidebar"
      style={{
        position: "fixed",
        display: "flex",
        height: "100vh",
        padding: "2px",
        margin: "0",
        overflow: "hidden",
      }}
    >
      <Sidebar>
        <Menu
          className="sideBar"
          style={{ padding: "0vh", overflow: "hidden" }}
        >
          <h6>General</h6>
          <h5>General</h5>
          <h6>General</h6>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            መነሻ
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            ስለ ካውንስሉ
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            የእምነት አምዶች
          </MenuItem>
          <Divider />
          <h6>Register</h6>
          <MenuItem
            routerLink={<Link to="/form1" />}
            className="sideItem"
            style={{ height: "3vh" }}
          >
            Form N 1
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/form2" />}
            className="sideItem"
            style={{ height: "3vh" }}
          >
            {" "}
            Form N 2
          </MenuItem>
          <Divider />
          <h6>የጽህፈት ቤት</h6>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            የቅርንጫፍ ጽ/ቤቶች ማስተባበሪያ
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            የልማትና ማኅበራዊ ተቋማት
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            ኢቫንጀሊካል ሚዲያ
          </MenuItem>
          <Divider />
          <h6>የጽህፈት ቤት</h6>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            የቅርንጫፍ ጽ/ቤቶች ማስተባበሪያ
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            የልማትና ማኅበራዊ ተቋማት
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            ኢቫንጀሊቫል ሚዲያ
          </MenuItem>
          <Divider />
          <h6>መንፈሳዊ ዘርፍ</h6>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            ኮሚሽንና ነገረ መለኮት
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            የምርምር፤ስልጠና እና አቅም ግንባታ
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            የመጽሐፍ ቅዱስ ት/ቤቶች
          </MenuItem>
          <MenuItem className="sideItem" style={{ height: "3vh" }}>
            {" "}
            የሴቶች፤የወጣቶችና የልጆች አገልግሎት
          </MenuItem>
          <Divider />
          <h6>አባልነት እና መስፈርቶች</h6>
          <MenuItem
            className="sideItem"
            routerLink={<Link to="/contact" />}
            style={{ height: "3vh" }}
          >
            ያግኙን
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sidebar1;
