import React, { Fragment, useState } from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import RoomServiceIcon from "@mui/icons-material/RoomService";

function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [bar, setBar] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Listt = ["Products", "Services", "About Us", "Contact Us"];
  return (
    <Fragment>
      <Box>
        <AppBar>
          <Toolbar style={{ backgroundColor: "black", alignItems: "center" }}>
            <RoomServiceIcon style={{ color: "#e67e22", fontSize: "2.8rem" }} />
            <Typography
              variant="h2"
              style={{
                color: "#e67e22",
                fontSize: "1.3rem",
                marginLeft: "1.3rem",
                fontWeight: 700,
              }}
            >
              My Restaurant
            </Typography>
            {isMatch ? (
              <Fragment>
                <Drawer
                  variant="temper"
                  open={bar}
                  anchor="right"
                  onClose={() => setBar(false)}
                  PaperProps={{
                    style: {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <List style={{ width: "250px", alignItems: "center" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <RoomServiceIcon
                          style={{
                            color: "#e67e22",
                            fontSize: "1.8rem",
                            marginLeft: "0.5rem",
                          }}
                        />
                        <ListItemText
                          style={{
                            color: "#e67e22",
                            fontSize: "1.2rem",
                            marginLeft: "0.7rem",
                            fontWeight: 700,
                          }}
                        >
                          {" "}
                          My Restaurant
                        </ListItemText>
                      </ListItemIcon>
                    </ListItemButton>

                    <Divider />
                    {Listt.map((item) => {
                      return (
                        <Fragment>
                          <ListItemButton
                            style={{
                              backgroundColor: "#4b4b4b",
                              marginTop: "0.5rem",
                            }}
                            onClick={() => {
                              if (item == "About Us") {
                                navigate("/about");
                              } else if (item == "Products") {
                                navigate("/");
                              } else if (item == "Contact Us") {
                                navigate("/contact");
                              } else if (item == "Services") {
                                navigate("/menu");
                              }
                            }}
                          >
                            <ListItemIcon>
                              <ListItemText
                                style={{
                                  color: "white",

                                  fontWeight: 700,
                                }}
                              >
                                {item}
                              </ListItemText>
                            </ListItemIcon>
                          </ListItemButton>
                        </Fragment>
                      );
                    })}
                  </List>
                </Drawer>
                <IconButton
                  style={{
                    color: "white",
                    fontWeight: 700,
                    marginLeft: "auto",
                  }}
                  onClick={() => setBar(!bar)}
                >
                  <i class="uil uil-bars"></i>
                </IconButton>
              </Fragment>
            ) : (
              <Fragment>
                {" "}
                <Tabs
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "white",
                    },
                  }}
                  textColor="inherit"
                  style={{ marginLeft: "auto" }}
                >
                  <Tab
                    label="Products"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "1.2rem",
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                  <Tab
                    label="Services"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "1.2rem",
                    }}
                    onClick={() => {
                      navigate("/menu");
                    }}
                  />
                  <Tab
                    label="Contact Us"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "1.2rem",
                    }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  />
                  <Tab
                    label="About Us"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "1.2rem",
                    }}
                    onClick={() => {
                      navigate("/about");
                    }}
                  />
                </Tabs>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </Fragment>
  );
}

export default Header;
