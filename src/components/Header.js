import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
<<<<<<< HEAD
  Link,
=======
  Box,
>>>>>>> 415bc40... feat : add link component
} from "@material-ui/core";
import Link from './common/Link'
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import LogoIcon from "../images/logo.svg";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles((theme) => ({
  icon: {
    verticalAlign: "middle",
  },
  logo: {
    display: "flex",
    alignItems: "stretch",
  },
  title: {
    fontSize: "1.1rem",
  },
  mobile: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
    },
  },
}));
export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
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
                  <span className={classes.mobile}>
                    Amplify 日本ユーザーグループ &nbsp;
                  </span>
                  <span role="img" aria-label="日本国旗">
                    🇯🇵
                  </span>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
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
<<<<<<< HEAD
                  <Link href="/resources" color="inherit">
=======
                  <Box m={1} />
                </Grid>
                <Grid item>
                  <Link to="/resources">
>>>>>>> 415bc40... feat : add link component
                    <DescriptionIcon className={classes.icon} />
                    リソース
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/companies" color="inherit">
                    <BusinessIcon className={classes.icon} />
                    利用企業
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
