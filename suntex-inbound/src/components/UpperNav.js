import React from "react";
import HeaderLogo from "../components/images/header_logo.png";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ReactComponent as RightHeader } from "../components/images/right_header.svg";
import { ReactComponent as Setting } from "../components/images/ic_settings_white.svg";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material/";
import { styled } from "@mui/material/styles";


const drawerWidth = 240;
const menuId = "primary-search-account-menu";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    marginBottom: "200px",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function UpperNav() {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{ background: "#325F80" }}
        // open={open}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            backgroundColor="white"
            sx={{ mr: 0 }}
          >
            <img
              src={HeaderLogo}
              alt="noimage"
            />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Suntex
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <Setting />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <RightHeader />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default UpperNav;
