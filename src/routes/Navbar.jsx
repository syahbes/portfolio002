import React from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  styled,
  Typography,
} from "@mui/material";

import { Home } from "@mui/icons-material";

import MenuComp from "../components/MenuComp"


const StyledToolbar = styled(Box)({
  padding: "3px",
  display: "flex",
  justifyContent: "space-between",
  // WHITE BACKGROUND_COLOR //
  // backgroundColor: "white",
  maxWidth: "1100px",
  width: "95%",
});

const MyNavLinks = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const MyBasicMenu = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        alignItems: "center",
        //backgroundColor: "background.default",
        //backgroundColor: "primary.dark",
        backgroundColor: "primary.light",
      }}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
          color="primary"
        >
          Shlomi
        </Typography>

        <MyNavLinks>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button component={NavLink} to="/">
              <Home />
            </Button>
            <Button component={NavLink} to="/about">
              About
            </Button>
            <Button component={NavLink} to="/skills">
              Skills
            </Button>
            <Button component={NavLink} to="/portfolio">
              Portfolio
            </Button>
            <Button component={NavLink} to="/contact">
              Contact
            </Button>
          </ButtonGroup>
        </MyNavLinks>
        <MyBasicMenu>
          <Typography variant="h6" color="primary">
            {/* <img src={LogoBig} height="25px" alt="Logo" /> */}
            Shlomi
          </Typography>
          {/* <img src={LogoBig} height="25px" alt="Logo" /> */}
          {/* <BasicMenu /> */}
          <MenuComp />
        </MyBasicMenu>
        <span> </span>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;