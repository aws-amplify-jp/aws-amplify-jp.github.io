import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link, Box } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Amplify Japan User Group
          </Typography>
          <EventIcon />
          <Link href="/events" color="inherit">
            イベント
          </Link>
          <Box mr={1} />
          <DescriptionIcon />
          <Link href="/resources" color="inherit">
            リソース
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
