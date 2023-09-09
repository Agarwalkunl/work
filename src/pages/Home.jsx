import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <Box
        className="img-fluid"
        sx={{
          backgroundImage: `url(${"./food.jpg"})`,
          width: "100%", // Set the width as needed
          height: {
            sm: "100vh",
            xs: "80vh",
          }, // Set the height as needed,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%", // Adjust to control how the image is scaled
          backgroundPosition: "center", // Center the background image
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginBottom: { sm: "9rem", xs: "2rem" },
            marginRight: { sm: "5rem", xs: "0" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#3d3d3d",
              fontSize: { sm: "2.9rem", xs: "2.4rem" },
            }}
          >
            Food Website
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#3d3d3d",
              fontSize: { sm: "1.7rem", xs: "1.3rem" },
              marginTop: "0.4rem",
            }}
          >
            Best Food in india
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontWeight: 700,
              backgroundColor: "#3d3d3d",
              fontSize: "1.1rem",
              marginTop: "0.9rem",
            }}
          >
            ORDER NOW
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Home;
