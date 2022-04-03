import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Menu as MenuIcon,
  Event as EventIcon,
  Description as DescriptionIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  Close as CloseIcon,
  People as PeopleIcon,
} from "@material-ui/icons";
import Link from "./Link";
import LogoIcon from "../images/logo.svg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  icon: {
    verticalAlign: "middle",
  },
  logo: {
    display: "flex",
    alignItems: "stretch",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  inline: {
    [theme.breakpoints.up("lg")]: {
      display: "inline",
    },
  },
  spacer: {
    marginBottom: "64px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "56px",
    },
  },
}));

export default function Header(props) {
  const { window } = props;
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                <Link to="/" color="inherit" className={classes.logo}>
                  <img
                    width="26"
                    height="26"
                    alt="Amplifyのロゴ"
                    src={LogoIcon}
                  />
                  &nbsp;
                  <Hidden
                    smDown
                    implementation="css"
                    className={classes.inline}
                  >
                    Amplify Japan User Group
                  </Hidden>
                  <span role="img" aria-label="日本国旗">
                    🇯🇵
                  </span>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Hidden mdDown implementation="css">
                <Grid
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Link to="/events">
                      <EventIcon className={classes.icon} />
                      イベント
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/resources">
                      <SchoolIcon className={classes.icon} />
                      リソース
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/reports">
                      <DescriptionIcon className={classes.icon} />
                      レポート
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/contributors" color="inherit">
                      <PeopleIcon className={classes.icon} />
                      コントリビューター
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/companies" color="inherit">
                      <BusinessIcon className={classes.icon} />
                      利用企業
                    </Link>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Hidden lgUp implementation="css">
        <nav className={classes.drawer}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {ResponsiveDrawer}
          </Drawer>
        </nav>
      </Hidden>
      <Box className={classes.spacer} />
    </div>
  );
}
