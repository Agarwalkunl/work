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
} from "@mui/material";

import RoomServiceIcon from "@mui/icons-material/RoomService";

function Header() {
  const [value, setValue] = useState();
  const [bar, setBar] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Listt = ["Products", "Services", "About Us", "Contact Us"];
  return (
    <Fragment>
      <Box>
        <AppBar>
          <Toolbar style={{ backgroundColor: "#063970", alignItems: "center" }}>
            <RoomServiceIcon style={{ color: "#ecf0f1", fontSize: "2.1rem" }} />

            {isMatch ? (
              <Fragment>
                <Drawer open={bar} onClose={() => setBar(false)}>
                  <List>
                    {Listt.map((item) => {
                      return (
                        <ListItemButton>
                          <ListItemIcon>
                            <ListItemText>{item}</ListItemText>
                          </ListItemIcon>
                        </ListItemButton>
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
                  indicatorColor="secondary"
                  textColor="inherit"
                >
                  <Tab
                    label="Products"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "3rem",
                    }}
                  />
                  <Tab
                    label="Services"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "3rem",
                    }}
                  />
                  <Tab
                    label="Contact Us"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "3rem",
                    }}
                  />
                  <Tab
                    label="About Us"
                    style={{
                      color: "#bdc3c7",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginLeft: "3rem",
                    }}
                  />
                </Tabs>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}

export default Header;
