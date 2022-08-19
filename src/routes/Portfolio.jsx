import React from "react";
import Box from "@mui/material/Box";
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
import CardA from "../components/CardA";
import portfolioData from "../data/portfolio.json";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

const Portfolio = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "1300px",
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: "1200px",
          padding: "20px",
          margin: "20px 10px",
        }}
      >
        <Typography variant="h4" mb={2}>
          Portfolio
        </Typography>

        <Box
          sx={{
            // backgroundColor: "white",
            maxWidth: "1200px",
            margin: "auto",
            marginTop: "30px",
            marginBottom: "30px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",




          }}
        >
          {portfolioData.portfolio.map((item) => {
            return (
              <CardA
                key={item.id}
                title={item.title}
                cover={item.cover}
                desc={item.desc}
                url={item.url}
                src_code={item.src_code}
              />
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};

export default Portfolio;
