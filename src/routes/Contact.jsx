import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_evk3hqk",
        "template_wh4890s",
        form.current,
        "SM34eR24S2EWWt2HE"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
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
            maxWidth: 800,
            padding: "20px",
            margin: "20px 10px",
          }}
        >
          <Typography variant="h4" mb={2}>
            Contact Me
          </Typography>

          <Typography variant="subtitle1" mb={2} gutterBottom>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{
                //  backgroundColor: "red",
                maxWidth: "550px",
                margin: "10px",
                marginTop: "30px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                error
                name="user_name"
                id="user_name"
                label="Name"
                variant="outlined"
                required="true"
              />
              <TextField
                error
                name="user_email"
                id="user_email"
                label="Email"
                variant="outlined"
                required="true"
                type="email"
              />
              <TextField
                error
                name="subject"
                fullWidth
                label="Subject"
                id="subject"
                // required="true"
              />

              <TextField
                error
                fullWidth
                name="message"
                id="message"
                label="Message"
                multiline
                rows={4}
                required="true"
              />
              <Button fullWidth variant="contained" type="submit">
                Contact Me
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Contact;
