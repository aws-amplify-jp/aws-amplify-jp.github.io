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
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

const Root = styled('div')(({ theme }) => ({
  display: "flex",
  "& .icon": {
    verticalAlign: "middle",
  },
  "& .logo": {
    display: "flex",
    alignItems: "stretch",
  },
  "& .title": {
    fontSize: "1.1rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
  },
  "& .drawer": {
    width: drawerWidth,
    flexShrink: 0,
  },
  "& .menuButton": {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  "& .drawerPaper": {
    width: drawerWidth,
  },
  "& .inline": {
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  "& .spacer": {
    marginBottom: "64px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "56px",
    },
  },
}));

export default function Header(props) {
  const { window } = props;
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
    <Root>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="menuButton"
            sx={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" className="title">
                <Link to="/" color="inherit" className="logo" sx={{ color: "black" }}>
                  <img
                    width="32"
                    height="32"
                    alt="Amplifyのロゴ"
                    src={LogoIcon}
                  />
                  <Box sx={{ mr: 1 }} />
                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'inline' },
                    }}
                    className="inline"
                  >
                    Amplify Japan User Group
                  </Box>
                  <span role="img" aria-label="日本国旗">
                    🇯🇵
                  </span>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
            <Box sx={{
              display: { xs: 'none', md: 'block' },
            }}>
                <Grid
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Link 
                      to="/events" 
                      sx={{ 
                        color: "black",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 153, 0, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <EventIcon className="icon" sx={{ mr: 0.5 }} />
                      イベント
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link 
                      to="/resources" 
                      sx={{ 
                        color: "black",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 153, 0, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <SchoolIcon className="icon" sx={{ mr: 0.5 }} />
                      リソース
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link 
                      to="/reports" 
                      sx={{ 
                        color: "black",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 153, 0, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <DescriptionIcon className="icon" sx={{ mr: 0.5 }} />
                      レポート
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link 
                      to="/contributors" 
                      color="inherit" 
                      sx={{ 
                        color: "black",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 153, 0, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <PeopleIcon className="icon" sx={{ mr: 0.5 }} />
                      コントリビューター
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link 
                      to="/companies" 
                      color="inherit" 
                      sx={{ 
                        color: "black",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 153, 0, 0.1)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <BusinessIcon className="icon" sx={{ mr: 0.5 }} />
                      利用企業
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{
        display: { xs: 'block', lg: 'none' },
      }} className="drawer">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{
              className: "drawerPaper",
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {ResponsiveDrawer}
          </Drawer>
        </Box>
      <Box className="spacer" />
    </Root>
  );
}
