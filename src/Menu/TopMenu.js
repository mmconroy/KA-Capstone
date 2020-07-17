import React from "react";
import { Link, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "./logo.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import honeycomb from "./honeycombs.png";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "#FFF5B2",
            color: "#362C28",
            positiion: "fixed",
          }}
        >
          <img
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="logo"
            src={honeycomb}
            style={{
              width: "24px",
              height: "24px",
              position: "fixed",
              left: "16px",
            }}
          ></img>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              style={{
                fontFamily: '"Lora", Serif',
                color: "#362C28",
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                fontFamily: '"Lora", Serif',
                color: "#362C28",
              }}
            >
              Account
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                fontFamily: '"Lora", Serif',
                color: "#362C28",
              }}
            >
              <Link to="/">Logout</Link>
            </MenuItem>
          </Menu>
          <p
            style={{
              position: "absolute",
              top: "24px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: '"Lora", Serif',
              fontSize: "20px",
              color: "#362C28",
            }}
          >
            The Hive
          </p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
