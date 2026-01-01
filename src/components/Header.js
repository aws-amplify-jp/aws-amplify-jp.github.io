import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Event as EventIcon,
  Description as DescriptionIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  Close as CloseIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import Link from "./Link";
import LogoIcon from "../images/logo.svg";

const drawerWidth = 240;

export default function Header(props) {
  const { window } = props;
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const ResponsiveDrawer = (
    <>
      <List>
        <ListItem onClick={handleDrawerToggle} button>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <Link to="/events">
          <ListItem button>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="イベント" />
          </ListItem>
        </Link>
        <Link to="/resources">
          <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="学習リソース" />
          </ListItem>
        </Link>
        <Link to="/companies">
          <ListItem button>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="利用企業" />
          </ListItem>
        </Link>
        <Link to="/reports">
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="レポート" />
          </ListItem>
        </Link>
        <Link to="/contributors">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="コントリビューター" />
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { lg: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
              >
                <Link
                  to="/"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "stretch" }}
                >
                  <img
                    width="26"
                    height="26"
                    alt="Amplifyのロゴ"
                    src={LogoIcon}
                  />
                  &nbsp;
                  {!isSmDown && (
                    <Box sx={{ display: { lg: "inline" } }}>
                      Amplify Japan User Group
                    </Box>
                  )}
                  <span role="img" aria-label="日本国旗">
                    🇯🇵
                  </span>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              {!isMdDown && (
                <Grid
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Link to="/events">
                      <EventIcon sx={{ verticalAlign: "middle" }} />
                      イベント
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/resources">
                      <SchoolIcon sx={{ verticalAlign: "middle" }} />
                      リソース
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/reports">
                      <DescriptionIcon sx={{ verticalAlign: "middle" }} />
                      レポート
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/contributors" color="inherit">
                      <PeopleIcon sx={{ verticalAlign: "middle" }} />
                      コントリビューター
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/companies" color="inherit">
                      <BusinessIcon sx={{ verticalAlign: "middle" }} />
                      利用企業
                    </Link>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {!isLgUp && (
        <Box component="nav" sx={{ width: drawerWidth, flexShrink: 0 }}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {ResponsiveDrawer}
          </Drawer>
        </Box>
      )}
      <Box
        sx={{
          marginBottom: { xs: "56px", sm: "64px" },
        }}
      />
    </Box>
  );
}
