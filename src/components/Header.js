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

const useStyles = makeStyles((_) => ({
  icon: {
    verticalAlign: "middle",
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
                <Link href="/" color="inherit">
                  Amplify Japan User Group
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
