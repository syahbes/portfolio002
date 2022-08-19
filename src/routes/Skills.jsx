import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Skills = () => {
  // const preventDefault = (event) => event.preventDefault();

  return (
    <Box
      sx={{
        // backgroundColor: "red",
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "30px",
        display: "flex",
        // flex: "center",
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
          Skills
        </Typography>

        <Typography variant="subtitle2" mb={2} gutterBottom>
          Expert in front-end development including technologies like HTML5,
          CSS3, JavaScript, React
        </Typography>

        <Typography variant="subtitle2" mb={2} gutterBottom>
          I’m not a designer but I have a good sense of aesthetics, and
          experience in responsive, mobile-first web design. I put special
          effort into optimizing my code and providing the best user experience.
          I would love to give you any kind of support also after the project's
          completion. I guarantee a commitment during work on your project.
        </Typography>

        <Typography variant="subtitle2" mb={2} gutterBottom>
          Visit my{" "}
          <Box
            sx={{
              display: "inline-block",
              marginRight: "5px",
              typography: "body1",
              "& > :not(style) + :not(style)": {
                ml: 2,
              },
            }}
            // onClick={preventDefault}
          >
            <Link href="https://www.linkedin.com/in/shlomi427/" target="_blank" rel="noreferrer" color="inherit">
              LinkendIn
            </Link>
          </Box>
   
          profile for more details.
        </Typography>
      </Card>
    </Box>
  );
};
export default Skills;
