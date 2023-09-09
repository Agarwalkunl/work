import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <Box>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            fontSize: { sm: "2rem", xs: "1.3rem" },
            fontWeight: 700,
          }}
        >
          Welcome To My Restaurant
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "justify" }}
          mr={2}
          ml={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad
          sed consequatur impedit nam eius, distinctio nisi unde earum natus,
          qui non libero quod iusto harum, voluptatibus cupiditate dicta eum
          ipsam illum. Quo natus, ullam laboriosam esse facere quasi temporibus,
          ea, minus dolor tempore laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi ad sed consequatur impedit nam
          eius, distinctio nisi unde earum natus, qui non libero quod iusto
          harum, voluptatibus cupiditate dicta eum ipsam illum. Quo natus, ullam
          laboriosam esse facere quasi temporibus, ea, minus dolor tempore
          laudantium.
        </Typography>
        <br />
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "justify" }}
          mr={2}
          ml={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad
          sed consequatur impedit nam eius, distinctio nisi unde earum natus,
          qui non libero quod iusto harum, voluptatibus cupiditate dicta eum
          ipsam illum. Quo natus, ullam laboriosam esse facere quasi temporibus,
          ea, minus dolor tempore laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi ad sed consequatur impedit nam
          eius, distinctio nisi unde earum natus, qui non libero quod iusto
          harum, voluptatibus cupiditate dicta eum ipsam illum. Quo natus, ullam
          laboriosam esse facere quasi temporibus, <br /> ea, minus dolor
          tempore Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi ad sed consequatur impedit nam eius, distinctio nisi unde
          earum natus, qui non libero quod iusto harum, voluptatibus cupiditate
          dicta eum ipsam illum. Quo natus, ullam laboriosam esse facere quasi
          temporibus, ea, minus dolor tempore laudantium. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Excepturi ad sed consequatur
          impedit nam eius, distinctio nisi unde earum natus, qui non libero
          quod iusto harum, voluptatibus cupiditate dicta eum ipsam illum. Quo
          natus, ullam laboriosam esse facere quasi temporibus, ea, minus dolor
          tempore laudantium.
          <br /> illum. Quo natus, ullam laboriosam esse facere quasi
          temporibus, ea, minus dolor tempore laudantium. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Excepturi ad sed consequatur
          impedit nam eius, distinctio nisi unde earum natus, qui non libero
        </Typography>
      </Box>
    </Fragment>
  );
}

export default About;
