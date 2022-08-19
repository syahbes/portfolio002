import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const About = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
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
        <Typography variant="h4" mb={2}>
          About me
        </Typography>

        <Typography variant="subtitle1" mb={2} gutterBottom>
          I'm very ambitious front-end developer looking for a role in
          established Tech company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </Typography>

        <Typography variant="subtitle1" mb={2} gutterBottom>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </Typography>

        <Typography variant="subtitle1" mb={2} gutterBottom>
          If I need to define myself in one sentence that would be a family
          person, a sports fanatic, and tech-obsessed 😊
        </Typography>
      </Card>

      <Card
        sx={{
          maxWidth: 500,
          padding: "20px",
          margin: "20px 10px",
        }}
      >
      <img src="https://i.postimg.cc/3JvBSVPW/reddit-avatar.png" alt="avatar" />     
      </Card>
    </Box>
  );
};

export default About;
