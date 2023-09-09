import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

function Contact() {
  return (
    <Fragment>
      <Box sx={{ paddingBottom: { xs: "7rem", sm: "0" } }}>
        <Box>
          <Typography
            variant="h4"
            ml={3}
            mt={3}
            sx={{ fontWeight: 700, fontSize: { xs: "1.3rem", sm: "2.3rem" } }}
          >
            Contact My Resturant
          </Typography>
          <Typography
            variant="subtitle1"
            ml={3}
            mt={3}
            mr={2}
            style={{ textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            accusantium. Voluptas dicta quod optio id, consectetur soluta, ullam
            doloremque nulla officia possimus tenetur recusandae quos libero
            porro laboriosam? Ex, natus!
          </Typography>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table
              sx={{
                width: "70%",
                marginTop: "0.3rem",

                marginLeft: "2rem",
              }}
            >
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <TableCell
                    sx={{
                      color: "black",
                      fontWeight: 700,
                      textAlign: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.3rem",
                    }}
                  >
                    <i
                      style={{
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                      class="uil uil-github"
                    ></i>
                    <Typography variant="h6" sx={{ display: "inline" }}>
                      {" "}
                      11223344
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.3rem",
                    }}
                  >
                    <i
                      style={{
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                      class="uil uil-phone"
                    ></i>
                    <Typography variant="h6" sx={{ display: "inline" }}>
                      {" "}
                      9351143434
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Contact;
