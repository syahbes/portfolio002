import React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

const Footer = ({ mode, setMode }) => {
  return (
    <Box
      borderTop={"solid 1px"}
      width={"100%"}
      // bgcolor={"#f2f2f4"}

      color={"#0a0a14"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.light",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LightModeIcon color="primary" />
        <Switch
          onChange={(e) => setMode(mode === "MyLightTheme" ? "MyDarkTheme" : "MyLightTheme")}
        />
        <DarkModeIcon color="secondary" />
      </div>

      <div
        style={{
          padding: "5px 0 0px 0",
          margin: "5px 0",
          display: "flex",

          // alignItems: "center",
          textDecoration: "none",
          color: "black",
        }}
      >
        <Typography variant="text" color="primary">
          My social links: <br />
        </Typography>
        <a
          href="https://www.linkedin.com/in/shlomi427/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <LinkedInIcon color="primary" />{" "}
        </a>
        <a href="https://github.com/syahbes" target="_blank" rel="noreferrer">
          <GitHubIcon color="primary" />
        </a>
      </div>
      <span> </span>
    </Box>
  );
};

export default Footer;
