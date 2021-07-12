import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Link, Grid } from "@material-ui/core";

const useStyles = makeStyles((_) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
    height: "36px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box mx="auto" m={1}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Link href="https://github.com/aws-amplify-jp/aws-amplify-jp.github.io">
                Feedback
              </Link>
            </Grid>
            <Grid item>
              <Link href="/coc">CoC</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
