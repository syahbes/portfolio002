import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          padding: "20px",
          margin: "20px 10px",
        }}
      >
        <Typography variant="h3" mb={2}>
          Hi, <br />
          I'm Shlomi
        </Typography>

        <Typography variant="subtitle1" mb={2} gutterBottom>
          A Front-end Webdeveloper
        </Typography>

        <Typography variant="subtitle1" mb={2} gutterBottom>
          HTML CSS JavaScript React Redux fire base
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button variant="contained" component={Link} to="/contact">Contact Me</Button>

          
        </Box>
      </Card>
    </Box>
  );
};
export default Home;
