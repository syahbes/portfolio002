import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {Menu as MenuIcon} from "@mui/icons-material";
import Home from "@mui/icons-material/Home";

export default function MenuComp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
            <Home />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/about">
          About
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/skills">
            Skills        
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/portfolio">
          Portfolio
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/contact">
            Contact
        </MenuItem>
      </Menu>
    </Box>
  );
}
