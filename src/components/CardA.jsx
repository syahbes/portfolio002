import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


export default function MediaCard({ cover, title, desc, url, src_code }) {
  return (
    <Box
sx={{
        backgroundColor: 'primary.dark',
        opacity: [0.6, 0.6, 0.6],

        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [1,1,1],
        },}}>
    <Card
      sx={{
        maxWidth: 345,
        borderBottom: "solid 1px ",
        borderRight: "solid 1px ",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`${cover}`}
        alt={`${title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${desc}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          href={`${src_code}`}
          target="_blank"
          rel="noreferrer"
        >
          Surce Code
        </Button>
        <Button
          variant="contained"
          size="small"
          href={`${url}`}
          target="_blank"
          rel="noreferrer"
        >
          Live demo
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}
