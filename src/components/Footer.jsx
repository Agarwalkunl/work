import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "black",
          position: "fixed",
          bottom: 0,
          width: "100vw",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#bdc3c7",
            fontWeight: 700,
            fontSize: {
              sm: "1.3rem",
              xs: "0.9rem",
            },
            textAlign: "center",
            padding: "1.3rem 0",
          }}
        >
          <Box
            sx={{
              "& .uil": {
                marginLeft: "0.3rem",
                fontSize: "24px", // Adjust the font size as needed
                transition: "all 500ms ease-in-out", // Apply the transition
              },
              "& .uil:hover": {
                transform: "scale(1.2)", // Rotate by 360 degrees on hover
                color: "whitesmoke",
                cursor: "pointer",
              },
            }}
          >
            {" "}
            <i style={{ marginLeft: "0.3rem" }} class="uil uil-youtube"></i>
            <i class="uil uil-github" style={{ marginLeft: "0.3rem" }}></i>
            <i class="uil uil-instagram" style={{ marginLeft: "0.3rem" }}></i>
            <i
              class="uil uil-twitter"
              style={{ marginLeft: "0.3rem" }}
            ></i>{" "}
          </Box>
          All Rights Reserved @ tehcno Yt
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Footer;
