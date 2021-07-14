import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid } from "@material-ui/core";
import Link from './common/Link'
import Theme from '../styles/theme'

const useStyles = makeStyles((_) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
    height: "36px",
  },
  link: {
    color: Theme.palette.primary.main
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box mx="auto" m={1}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Link to="/" className={classes.link}>
                Feedback
              </Link>
            </Grid>
            <Grid item>
              <Link to="/coc" className={classes.link}>CoC</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
