import React from 'react'
import { Divider, IconButton, List, styled } from '@mui/material'
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTheme } from "@mui/material/styles";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
    backgroundColor: "rgb(30,60,80)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(5)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(6)} + 1px)`,
    },
  });

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));


  function LeftNav() {
  const theme = useTheme();

    return (
        <div>
          
            <Drawer variant="permanent">
              <DrawerHeader>
                <IconButton >
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List sx={{ pt: "0px", pd: 0 }}>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? (
                          <InboxIcon sx={{ color: "#fff" }} />
                        ) : (
                          <MailOutlineIcon sx={{ color: "#fff" }} />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <InboxIcon sx={{ color: "#fff" }} />
                      ) : (
                        <MailOutlineIcon sx={{ color: "#fff" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
        </div>
    )
}

export default LeftNav;
