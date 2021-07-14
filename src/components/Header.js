import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import Link from './common/Link'
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import LogoIcon from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    verticalAlign: "middle",
  },
  logo: {
    display: "flex",
    alignItems: "stretch",
  },
  title: {
    fontSize: '1.1rem'
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
                    Amplify 日本ユーザーグループ
                    &nbsp;
                  </span>
                  <span role="img" aria-label="日本国旗">
                    🇯🇵
                  </span>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item>
                  <Link to="/events">
                    <EventIcon className={classes.icon} />
                    イベント
                  </Link>
                </Grid>
                <Grid item>
                  <Box m={1} />
                </Grid>
                <Grid item>
                  <Link to="/resources">
                    <DescriptionIcon className={classes.icon} />
                    リソース
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
