import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import LogoIcon from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    verticalAlign: "middle",
  },
  logo: {
    display: 'flex',
    alignItems: 'stretch'
  },
  mobile: {
    display: "none",
    [theme.breakpoints.up("md")]: {
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
              <Typography variant="h6">
                <Link href="/" color="inherit" className={classes.logo}>
                  <img width="26" height="26" alt="Amplifyのロゴ" src={LogoIcon} />
                  &nbsp;
                  <span className={classes.mobile}>Amplify 日本ユーザーグループ</span>
                  <span role="img" aria-label="日本国旗">🇯🇵</span>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item>
                  <Link href="/events" color="inherit">
                    <EventIcon className={classes.icon} />
                    イベント
                  </Link>
                </Grid>
                <Grid item>
                  <Box m={1} />
                </Grid>
                <Grid item>
                  <Link href="/resources" color="inherit">
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
