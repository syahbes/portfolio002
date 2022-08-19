import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { MyLightTheme, MyDarkTheme } from "../data/themes.js";

const Layout = () => {
  const [mode, setMode] = useState("MyLightTheme");
  const checkTheme = () => mode === "MyLightTheme" ? MyLightTheme : MyDarkTheme;

  return (
    <ThemeProvider theme={checkTheme()}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Outlet />
        <Footer setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
